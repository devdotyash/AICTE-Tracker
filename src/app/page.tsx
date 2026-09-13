"use client";

import { useSession } from "next-auth/react";
import { LogoutButton } from "@/components/LogoutButton";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main className="shell">
      {status === "loading" && <p>Loading session...</p>}
      {status === "authenticated" && (
        <div>
          <h2>
            Signed in as {session?.user?.name ?? session?.user?.email}
            <LogoutButton />
          </h2>
        </div>
      )}
      {status === "unauthenticated" && (
        <p>
          You are not signed in. <Link href="/auth/signin">Sign in</Link> .
        </p>
      )}
    </main>
  );
}
