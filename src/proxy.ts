import { Middleware } from "better-auth";
import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

// Better-Auth認証状態確認ミドルウェア
type AuthMiddlewareContext = {
  request: NextRequest;
};
export const authMiddleware: Middleware = async (context: AuthMiddlewareContext) => {
  const { request } = context;
  
  try {
    // セッションを確認
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    const url = new URL(request.url);
    const pathname = url.pathname;

    // 保護されたパスで認証されていない場合
    if (!session?.user && pathname.startsWith('/auth') === false) {
      // return NextResponse.redirect(new URL('/auth', request.url));
    }

    // 認証済みユーザーが認証ページにアクセスした場合
    const authPaths = ['/login', '/register'];
    const isAuthPath = authPaths.some(path => url.pathname.startsWith(path));
    
    if (isAuthPath && session?.user) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // リクエストヘッダーにユーザー情報を追加
    const requestHeaders = new Headers(request.headers);
    if (session?.user) {
      requestHeaders.set('x-user-id', session.user.id);
      requestHeaders.set('x-user-email', session.user.email || '');
    }

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    console.error('Auth middleware error:', error);
    return NextResponse.next();
  }
};

// Next.js middleware用のエクスポート
export async function proxy(request: NextRequest) {
  return authMiddleware({
    request,
  });
}

// ミドルウェアを適用するパスの設定
export const config = {
  matcher: [
    /*
     * マッチングするパスパターン:
     * - api, _next/static, _next/image, favicon.ico以外のすべてのパス
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};