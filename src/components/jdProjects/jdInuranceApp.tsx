import jdStringUtils from "../../utils/jdStringUtils";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import styles from './proejctsStyles.module.scss';

export function JdInsuranceApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Redesign and combine a set of truly massive applications that help underwriters make decisions quickly and accurately.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Animated prototype using Principle</li>
                <li>Information architecture</li>
                <li>Presenting to stakeholders and underwriters</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p className={styles.projectGapReducer}>We took a cyclical appraoch to our research, making sure we were validating ideas weekly:</p >

            <ol>
                <li>Interview stakeholders and underwriters</li>
                <li>Identify problems, come up with proposed solutions</li>
                <li>Design proposed solutions</li>
                <li>Present solutions to underwriters</li>
                <li>Review results with stakeholders</li>
                <li>Repeat</li>
            </ol>

        </>
    )
}