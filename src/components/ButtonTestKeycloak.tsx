"use client";
import { signIn, signOut } from "next-auth/react";

export default function ButtonTestKeycloak() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <button
        onClick={() => signIn("keycloak")}
        className="bg-green-500 p-3 rounded-2xl"
      >
        SignIn
      </button>
      <button
        onClick={() => signOut()}
        className="bg-red-500 p-3 rounded-2xl"
      >
        Sign Out
      </button>
    </div>
  );
}
