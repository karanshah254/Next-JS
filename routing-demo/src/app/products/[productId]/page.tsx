export default function ProductDetails({ params }: {
    params: { productId: string }
}) {
    return (
        <html>
            <body>
                <h1>
                    Details about product {params.productId}
                </h1>
            </body>
        </html>
    )
}