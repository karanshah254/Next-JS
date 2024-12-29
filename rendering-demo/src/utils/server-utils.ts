// this is a server-only file and cannot be imported in the client-side code
import 'server-only';

export const serverSideFunction = () => {
    console.log(
        `use multiple libraries,
        use environment variables,
        interact with a database,
        process confidential information,`
    );
    return "server result";
}