'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs"; // using clerk for authentication

export default function Navigation() {
    const pathname = usePathname();
    return (
        <nav className="flex justify-center items-center p-2">
            <Link
                href="/"
                className={pathname === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
                Home
            </Link>
            <Link
                href="/about"
                className={
                    pathname === "/about" ? "font-bold mr-4" : "text-blue-500 mr-4"
                }
            >
                About
            </Link>
            
            {/* using clerk to authentication */}
            <SignedOut>
                <SignInButton mode="modal" />
            </SignedOut>
            
            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    )
}