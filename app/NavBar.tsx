"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex p-5 bg-slate-200 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-5">
            Signout
          </Link>
        </div>
      )}
      {status === "unauthenticated" && <Link href="/api/auth/signin">Login</Link>}
    </div>
  );
};

export default NavBar;
