// these becomes client only code and will not be included in the server-route/page.tsx file and cannot be rendered anywhere in server component
import 'client-only';

export const clientSideFunctions = () => {
    console.log(
        `use window object,
        use locals storage,`
    );
    return "client result";
}