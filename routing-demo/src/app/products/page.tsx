import Link from "next/link";

export default function ProductList() {
    const id = 100;
    return (
        <div>
            <h1>Product List</h1>
            <h4><Link href={'/products/1'}>Product 1</Link></h4>
            <h4><Link href={'/products/2'}>Product 2</Link></h4>
            <h4><Link href={'/products/3'} replace>Product 3</Link></h4>
            <h4><Link href={`/products/${id}`}>Product {id}</Link></h4>

            <Link href={'/'}>Back to home page</Link>
        </div>
    )
}