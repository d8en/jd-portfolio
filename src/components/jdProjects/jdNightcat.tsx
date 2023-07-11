import jdStringUtils from "../../utils/jdStringUtils";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";

export function JdNightCat(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Design a brand around a cat who clearly ruled the founders household.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Typeface design</li>
                <li>Cat silhouette</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>I met with the founder to review their vision for the brand.</p>

        </>
    )
}