import jdStringUtils from "../../utils/jdStringUtils";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";


export function JdTypoApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Create a text-based social media app that shows the reader exactly how the writer crafted the post.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Animated donut timer</li>
                <li>Record and playback of keystrokes and selections</li>
                <li>Minimal text input</li>
            </ul>

        </>
    )
}