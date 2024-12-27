import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";


// use of streaming a type of server rendering strategy
export default function ProductDetailPage() {
    return (
        <div>
            <h1>Product detail page</h1>
            <Suspense fallback={<div>Loading product...</div>}>
                <Product />
            </Suspense>
            <Suspense fallback={<div>Loading reviews...</div>}>
                <Reviews />
            </Suspense>
        </div>
    );
}