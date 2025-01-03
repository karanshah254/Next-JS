"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import './styles.css';
import { useState } from "react";

const navLinks = [
    {
        name: 'Register', href: '/register'
    },
    {
        name: 'Login', href: '/login'
    },
    {
        name: 'Forgot Password', href: '/forgot-password'
    },
]

export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {
    const [input, setInput] = useState('');
    const pathname = usePathname();
    return (
        <div>
            <div>
                {/* We can use template instead of layout here and our state is not preserved when we navigate to other page because we are using template here.
                Rename layout.tsx file with template.tsx and then fill this input box and after that navigate to other page you will see that input box is empty. */}
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            </div>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                    <Link href={link.href} key={link.name} className={isActive ? 'font-bold mr-4' : "text-blue-500 mr-4"}>
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}