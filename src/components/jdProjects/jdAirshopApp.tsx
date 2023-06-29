import jdStringUtils from "../../utils/jdStringUtils";

export function JdAirshopApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <h2>{jdStringUtils.emojiGoal}Goal</h2>
            <p>Develop an application that allows end users to schedule at-home return pickups. The app should ideally provide same-day pickup with specified time windows such as morning, noon, or evening. Additionally, the app should maintain clear communication with the end user throughout the logistics process to ensure a smooth experience.</p>

            {/* PROCESS */}
            <h2>{jdStringUtils.emojiFunFeatures}Fun Features</h2>
            <p>Develop an application that allows end users to schedule at-home return pickups. The app should ideally provide same-day pickup with specified time windows such as morning, noon, or evening. Additionally, the app should maintain clear communication with the end user throughout the logistics process to ensure a smooth experience.</p>

        </>
    )
}