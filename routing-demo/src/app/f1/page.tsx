import Link from "next/link"

// use of intercepting routes
export default function F1Page() {
    return (
        <>
            <h1>F1 Page</h1>
            <Link href={'/f1/f2'}>Navigate to F2</Link>
        </>
    )
}