/*
Middleware allows us to specify paths where it will be active.
- Custom matcher config
- Conditional Statements
*/


import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // header and cookies in middleware
    const response = NextResponse.next()
    const themePreference = request.cookies.get('theme')
    if (!themePreference) {
        response.cookies.set('theme', 'dark')
    }
    response.headers.set('custom-header', 'custom-value') // custom header
    return response

    // using conditional statements
    // if (request.nextUrl.pathname === '/profile') {
    //     return NextResponse.redirect(new URL('/hello', request.url))
    // }

    // return NextResponse.redirect(new URL('/', request.url))
}

// using custom matcher config
// export const config = {
//     matcher: '/profile',
// }