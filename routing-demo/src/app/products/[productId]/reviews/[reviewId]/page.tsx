import { notFound } from 'next/navigation'

export default function ReviewProduct({ params }: {
    params: { productId: string, reviewId: string }
}) {
    if (parseInt(params.reviewId) > 1000) {
        notFound()
    }
    return (
        <html>
            <body>
                <h2>
                    Review {params.reviewId} for product {params.productId}
                </h2>
            </body>
        </html>
    )
}