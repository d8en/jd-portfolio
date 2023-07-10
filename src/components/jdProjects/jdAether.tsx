import jdStringUtils from "../../utils/jdStringUtils";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";

export function JdAether(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Design an insurance brand that feels transparent and refreshing.</p>

        </>
    )
}