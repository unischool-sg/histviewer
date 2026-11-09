"use client";
import { Google } from "@deemlol/next-icons";

export default function AuthPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 py-12 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Authentication Page</h1>
            <p className="mt-4 text-gray-600">Please log in to access your account.</p>
            {/* Add your authentication form or components here */}

            <button className="mt-5 border border-gray-400 rounded p-4 text-gray-600 flex items-center space-x-2 hover:bg-gray-200">
                <Google />
                <span>Googleでログイン</span>
            </button>
        </div>
    )
}