// by using this comment, we are telling the compiler to use the client side rendering for this file
"use client";

import { useState } from "react";

export default function DashboardPage() {
    console.log('Dashboard Page Client Side Component');
    const [name, setName] = useState("");
    return (
        <div>
            <h1>DashBoard Page</h1>
            <input style={{
                color: 'black',
            }} value={name} type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
            <p>Hello {name}</p>
        </div>
    );
}