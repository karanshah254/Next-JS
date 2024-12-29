import ImageSlider from "@/components/imageSlider";
import { serverSideFunction } from "@/utils/server-utils"

export default function ServerRoute() {
    console.log('Server Route Rendered');
    const result = serverSideFunction();
    return (
        <>
            <h1>Server Route</h1>
            <p>{result}</p>

            {/* As you can see, this page is rendered on the server side
            so imagee slider will not work here. to work with image slider
            we have to use third party package like slick slider. So i have downloaded
            the package and implemented in the ImageSlider component. */}
            <ImageSlider />
        </>
    )
}