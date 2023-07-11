import jdStringUtils from "../../utils/jdStringUtils";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";

export function JdWeekend(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Some of these had no goal, some did and it wasn't reached. That's the beauty of side projects, there's no pressure and only chosen constraints.</p>

        </>
    )
}