// error handling are client components, not server components
// if url is corrupted, browser will show this error page (error.tsx)

"use client";
import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
    useEffect(() => {
        console.error(`${error}`);
    }, [error]);
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-2xl text-red-500">Error fetching users data</div>
        </div>
    );
}