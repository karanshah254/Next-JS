// every component in the app folder is a server component initially
// we can't use state or effect hooks in server components

export default function Page() {
    console.log('About Page in server component')
    return (
        <h1>
            About Page & time is {new Date().toLocaleTimeString()}
            {/* in static rendering once the app is built the time will be static and will not change on refreshing the page */}
        </h1>
    )
}