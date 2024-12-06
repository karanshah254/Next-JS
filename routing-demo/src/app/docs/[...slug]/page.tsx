export default function Docs({ params }: {
    params: {
        slug: string[]
    }
}) {
    if (params.slug?.length === 2) {
        return (
            <html>
                <body>
                    <h1>
                        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
                    </h1>
                </body>
            </html>
        )
    } else if (params.slug?.length === 1) {
        return (
            <html>
                <body>
                    <h1>
                        Viewing docs for feature {params.slug[0]}
                    </h1>
                </body>
            </html>
        )
    }

    return (
        <html>
            <body>
                <h1>
                    Docs Home Page
                </h1>
            </body>
        </html>
    )
}