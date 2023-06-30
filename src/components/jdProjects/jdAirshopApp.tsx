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
            <p>It is essential that every person working on this product attends these meetings. No one likes work being "tossed over the fence," and good ideas can come from anyone, regardless of their discipline.</p>

            {/* DESIGN */}
            <h2>{jdStringUtils.design}</h2>
            <p>I created a high-fidelity prototype of the end user experience for returning items. This was well received by the team, with a few minor suggestions that helped improve its usability.</p>
            <p>We then reviewed with our client, who also only had minor suggestions. We were quickly ready to build.</p>

            {/* BUILD */}
            <h2>{jdStringUtils.build}</h2>

            <p>On the technical side, we had to keep things super simple since we only had a month to ship. I met with our backend engineer who had a draft of the db model. With just a few minor tweaks, the model was ready.</p>
            <p>Stack:</p>

            <ul>
                <li>React</li>
                <li>C# .NET</li>
                <li>MySQL</li>
            </ul>

            <p>We decided to keep two separate repos: one for front end, one for backend.</p>

        </>
    )
}