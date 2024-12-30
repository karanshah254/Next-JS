// using interleaving of both server and client components

'use client';
import { useState } from "react";

export const ClientComponentTwo = () => {
    const [name, setName] = useState('Name 2')
    return (
        <>
            <h1>Client Component Two</h1>
        </>
    )
}