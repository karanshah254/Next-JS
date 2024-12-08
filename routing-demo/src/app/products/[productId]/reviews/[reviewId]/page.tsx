"use client"

import { notFound } from 'next/navigation'

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ReviewProduct({ params }: {
    params: { productId: string, reviewId: string }
}) {
    // const random = getRandomInt(2)
    // if (random === 1) {
    //     // error handling
    //     throw new Error('Error in loading the review')
    // }
    if (parseInt(params.reviewId) > 1000) {
        notFound()
    }
    return (
        <h2>
            Review {params.reviewId} for product {params.productId}
        </h2>
    )
}