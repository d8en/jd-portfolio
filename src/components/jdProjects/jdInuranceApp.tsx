import jdStringUtils from "../../utils/jdStringUtils";
import { JdImg } from "../jdImg/jdImg";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import { JdVimeoPlayer } from "../jdVimeoPlayer/jdVimeoPlayer";
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
            <figcaption className={styles.projectImageCaption}>Prototypes for the future vision and the immediate work efforts.</figcaption>

            <p>As a project wrap up, I created an animated prototype for the "future" version. This was my favorite part of the project.</p>

            {/* PROTOTYPE VIDEO */}
            <JdVimeoPlayer
                src="https://player.vimeo.com/video/842977038?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                className={`${styles.projectVideo} ${styles.projectVideoWide}`}
            />

        </>
    )
}