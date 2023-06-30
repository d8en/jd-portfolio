import jdStringUtils from "../../utils/jdStringUtils";

export function JdAirshopApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <h2>{jdStringUtils.goal}</h2>
            <ul>
                <li>Develop an application that allows end users to schedule at-home return pickups. </li>
                <li>The app should ideally provide same-day pickup with specified time windows such as morning, noon, or evening. </li>
                <li>Additionally, the app should maintain clear communication with the end user throughout the logistics process to ensure a smooth experience.</li>
            </ul>

            {/* FUN FEATURES */}
            <h2>{jdStringUtils.funFeatures}</h2>
            <ul>
                <li>Google Maps API</li>
                <li>Shopify API</li>
                <li>On screen calendar picker</li>
                <li>Driver features like tap-to-call and route directions</li>
                <li>Custom virtual router</li>
            </ul>

            {/* IDEATION */}
            <h2>{jdStringUtils.ideation}</h2>
            <p>Our first client was getting ready to launch a “dark store” in Chicago. They absolutely loved the idea of return pickup and wanted to offer a ‘same day’ pickup option.</p>
            <p>I love starting with an unstructured brainstorming discussion. This allows everyone to express their ideas, challenge others, and refine the good ones until we have general consensus. We typically progress from "in a perfect world" to "what can we do first?".</p>
            <p>It is essential that every person working on this product attends these meetings. No one likes work being "tossed over the fence," and good ideas can come from anyone, regardless of their discipline.</p>

        </>
    )
}