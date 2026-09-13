"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Sign-in failed:", error);
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-4">
      <div className="w-full max-w-sm space-y-10 rounded-3xl border border-gray-100 bg-white p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)]">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-extrabold tracking-tighter text-gray-950">
            Sign in
          </h1>
          <p className="text-sm text-gray-600">
            Connect with your Google account to access{" "}
            <span className="font-semibold text-indigo-700">AICTE Tracker</span>
            .
          </p>
        </div>

        <div className="space-y-4 text-center">
          <button
            onClick={handleSignIn}
            disabled={loading}
            className="font-medium text-indigo-600 underline hover:text-indigo-800 focus:outline-none disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Continue with Google"}
          </button>
        </div>
      </div>
    </main>
  );
}
