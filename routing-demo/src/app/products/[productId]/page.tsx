import { Metadata } from "next"
import { resolve } from "path"

type Props = {
    params: {
        productId: string
    }
}

// dynamic metadata generation based on the route params
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${params.productId}`)
        }, 1000)
    })
    return {
        title: `Product ${title}`,
    }
}


export default function ProductDetails({ params }: Props) {
    return (
        <h1>
            Details about product {params.productId}
        </h1>
    )
}