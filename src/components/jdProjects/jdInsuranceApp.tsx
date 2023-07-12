import jdStringUtils from "../../utils/jdStringUtils";
import { JdImg } from "../jdImg/jdImg";
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

            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/insuranceSs1.webp?alt=media"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/insuranceSs2.webp?alt=media"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototypes for the future vision and the immediate work efforts</figcaption>

            <p>I created a high-fidelity animated prototype for the "future" experience, combining a years worth of research, iteration, and design work. This video was an excellent communication tool for stakeholders, underwriters, and executives.</p>

        </>
    )
}