import { type NextRequest } from "next/server"
import { headers } from "next/headers"

// routehandlers
export async function GET(request: NextRequest) {
    // headers in route handlers
    const requestHeader = new Headers(request.headers)

    const headerList = await headers() // header from nextjs

    console.log(requestHeader.get('Authorization'))
    console.log(headerList.get('Authorization'))

    // new way for headers
    return new Response("<h1>Profile's API data</h1>", {
        headers: {
            'Content-Type': 'text/html'
        }
    })
}