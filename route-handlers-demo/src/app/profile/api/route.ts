import { type NextRequest } from "next/server"
import { headers, cookies } from "next/headers"

// routehandlers
export async function GET(request: NextRequest) {
    // headers in route handlers
    const requestHeader = new Headers(request.headers)

    const headerList = await headers(); // header from nextjs

    (await cookies()).set('resultPerPage', '20') // 2nd way - cookies in route handlers
    const theme = request.cookies.get('theme') // 1st way - cookies in route handlers

    console.log(requestHeader.get('Authorization'))
    console.log(headerList.get('Authorization'))

    console.log(theme) // 1st way - cookies in route handlers
    console.log((await cookies()).get('resultPerPage')) // 2nd way - cookies in route handlers

    
    // new way for headers
    return new Response("<h1>Profile's API data</h1>", {
        headers: {
            'Content-Type': 'text/html',
            "Set-Cookie": "theme=dark" // cookies in route handlers
        }
    })
}