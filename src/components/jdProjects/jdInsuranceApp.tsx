import jdStringUtils from "../../utils/jdStringUtils";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import styles from './proejctsStyles.module.scss';

export function JdInsuranceApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Design an experience that ultimately helps underwriters produce profitable quotes faster.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Animated prototype using Principle</li>
                <li>Information architecture</li>
                <li>Leading stakeholders presentations</li>
                <li>User research with underwriters</li>
                <li>Product roadmaps</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p className={styles.projectGapReducer}>We took a cyclical approach to our research, validating ideas weekly:</p >

            <ol>
                <li>Interview stakeholders and underwriters</li>
                <li>Identify problems, come up with proposed solutions</li>
                <li>Design proposed solutions</li>
                <li>Present solutions to underwriters and stakeholders</li>
                <li>Review results with stakeholders</li>
                <li>Repeat</li>
            </ol>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p className={styles.projectGapReducer}>We spent one year iterating through several designs, and ultimately came up with two sets of designs:</p>
            <ol>
                <li>One set for the future (5+ years out)</li>
                <li>One set that we could start working on immediately</li>
            </ol>

            <p>I created a high-fidelity animated prototype for the "future" experience, combining a years worth of research, iteration, and design work. This video was an excellent communication tool for stakeholders, underwriters, and executives.</p>

            <p>This project contains highly confidential information so unfortunately I can't share the video or UI design.</p>

        </>
    )
}