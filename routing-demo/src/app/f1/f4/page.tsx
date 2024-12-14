import Link from "next/link";

export default function F4Page() {
    return (
        <div>
            <h1>F4 Page</h1>
            <Link href={'/f1/f3'}>Navigate to F3 Page</Link>
            <Link href={'/about'}>About Page</Link>
        </div>
    )
}