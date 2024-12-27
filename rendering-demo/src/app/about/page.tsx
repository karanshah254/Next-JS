// every component in the app folder is a server component initially
// we can't use state or effect hooks in server components

import { cookies } from "next/headers"


export default async function Page() {
    // for dynamic rendering we can use cookies - start
    const themeCookies = await cookies();
    const theme = themeCookies.get('theme') || 'light';
    console.log(theme)
    // dyanmic rendering - end

    console.log('About Page in server component')
    return (
        <h1>
            About Page & time is {new Date().toLocaleTimeString()}
            {/* in static rendering once the app is built the time will be static and will not change on refreshing the page */}
        </h1>
    )
}