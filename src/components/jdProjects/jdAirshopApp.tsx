import jdStringUtils from "../../utils/jdStringUtils";

export function JdAirshopApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <h2>{jdStringUtils.emojiGoal}Goals</h2>
            <ul>
                <li>Develop an application that allows end users to schedule at-home return pickups. </li>
                <li>The app should ideally provide same-day pickup with specified time windows such as morning, noon, or evening. </li>
                <li>Additionally, the app should maintain clear communication with the end user throughout the logistics process to ensure a smooth experience.</li>
            </ul>

            {/* PROCESS */}
            <h2>{jdStringUtils.emojiFunFeatures}Fun Features</h2>
            <ul>
                <li>Google Maps API (places and autocomplete)</li>
                <li>Shopify API (lookup order detail)</li>
                <li>On screen calendar picker</li>
                <li>Driver features like tap-to-call and route directions</li>
                <li>Custom virtual router</li>
            </ul>

        </>
    )
}