import jdStringUtils from "../../utils/jdStringUtils";
import { JdImg } from "../jdImg/jdImg";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import styles from './proejctsStyles.module.scss';

export function JdObApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Design a project management application that improves both internal and external communication while increasing revenue and quality of work.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Time management</li>
                <li>Dashboards</li>
                <li>Advanced search and filtering</li>
                <li>Project hierarchy</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>The first and most important step was research. I interviewed agecny staff at all levels and identified common problems across teams.</p>

            <p className={styles.projectGapReducer}>Persona groups:</p>
            <ul>
                <li>Senior management</li>
                <li>Middle management</li>
                <li>Project and product managers</li>
                <li>Account executives</li>
                <li>Designers, writers, and devleopers</li>
            </ul>

            <p className={styles.projectGapReducer}>Primary issues we felt we could solve with the app:</p>
            <ul>
                <li>Too many meetings solely focused on "what's the latest?"</li>
                <li>Important updates were posted in Slack and hard for PMs to track</li>
                <li>Time tracking was mentally exhausting and time-consuming for staff members</li>
                <li>Middle management and lower level staff needed more visibility into upcoming work</li>
            </ul>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>The most challenging aspect wasn't generating designs, but establishing an execution plan. Specifically, determining the starting point and defining the intermediate and long-term objectives.</p>

            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/obProto1.webp?alt=media"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototype for an executive dashboard</figcaption>

            <p>We focused on giving project managers actionable overviews while giving lower level staff a view of their day, week, and month.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/obProto4.webp?alt=media"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/obProto5.webp?alt=media"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototypes for a project overview screen and a timeline view for lower level staff</figcaption>

            <p>We found that a robust search feature was super important to almost all of our persona groups, so we spent quite some time making sure we had great filtering options and digestable results.</p>

            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/obProto3.webp?alt=media"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototype of the advanced "global" search ui</figcaption>

            {/* RESULTS */}
            <JdProjectSubHeader {...jdStringUtils.results} />
            <p>We shipped the app to about 4 large beta clients, who all had excellent feedback. We met weekly with staff members to solicit honest feedback (formally and adhoc) and tried to make room for incremental changes while maintaining our planned roadmap.</p>

            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/obProto2.webp?alt=media"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototype of the login page on mobile</figcaption>

        </>
    )
}