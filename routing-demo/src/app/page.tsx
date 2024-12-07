import Link from "next/link"

export default function Home() {
    return (
        <>
            <h1>
                Welcome to the home page!
            </h1>

            {/* Linking through UI navigation */}
            <Link href="/blog">Blog</Link>
            <Link href={'/products'}>Products</Link>
        </>
    )
}