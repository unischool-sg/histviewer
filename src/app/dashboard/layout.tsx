"use client";
import { useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import AppSidebar from "@/components/layout/sidebar";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    // You can add any client-side logic here if needed
    useEffect(() => {
        const checkAuth = async () => {
            const isAuthenticated = await authClient.getSession();
            if (!isAuthenticated) {
                // Redirect to login or handle unauthenticated state
                window.location.href = "/auth";
            }
        };
        
        checkAuth();
    }, []);

    return (
        <SidebarProvider>
            <AppSidebar />

            <div className="flex min-h-screen">
                {/* Sidebar can be added here if needed */}
                <main className="flex-1 bg-white">
                    {children}
                </main>
            </div>
        </SidebarProvider>
    );
}