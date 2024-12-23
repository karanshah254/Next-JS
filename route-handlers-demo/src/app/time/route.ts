// while doing npm run build and then npm run start we get updated time but on reloading the page we get the same time again and again.
// this is called caching in route handlers. It can be cancelled by:


// by default the value is "auto". This means the route handler will be cached if the route handler is not dynamic.
export const dynamic = 'force-dynamic'; // this will force the route handler to be dynamic and not cache the response.


export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString(),
    })
}


/*
Cathcing can be removed by:
1. Setting the dynamic variable to 'force-dynamic'
2. using the Request object with GET method
3. employing the dynamic functions like headers() and cokkies().
4. using any HTTP method other than GET
*/