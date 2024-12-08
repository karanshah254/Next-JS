"use client";
import { useRouter } from "next/navigation"; // for navigating to other pages

// navigating programmatically
export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        alert('Order placed successfully');
        router.push('/')
    }
    return (
        <>
            <h1>
                Order Product
            </h1>
            <button onClick={handleClick}>
                Place Order
            </button>
        </>
    )
}