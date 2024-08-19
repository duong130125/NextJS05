"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Link href="/" className={pathName == "/" ? "active" : ""}>
        Home
      </Link>
      <Link href="/about" className={pathName == "/about" ? "active" : ""}>
        About
      </Link>
      <Link href="/contact" className={pathName == "/contact" ? "active" : ""}>
        Contact
      </Link>
      <Link href="/login" className={pathName == "/login" ? "active" : ""}>
        Login
      </Link>
    </div>
  );
}
