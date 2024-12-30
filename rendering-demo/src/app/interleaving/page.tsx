// interleaving server and client component from 'src/components/file_name.tsx'
// this means that a importing server component in a client component is not supported in NextJS but importing client component in a server component is supported
// this can be solved using react props



import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";


export default function InterleavingPage() {
    return (
        <>
            <h1>Interleaving Page</h1>

            {/* here inside the ClientComponentOne, we are importing the ServerComponentOne using react props */}
            <ClientComponentOne >
                <ServerComponentOne />
            </ClientComponentOne>
        </>
    )
}