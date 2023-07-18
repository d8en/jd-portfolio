import jdStringUtils from "../../utils/jdStringUtils";
import { JdImg } from "../jdImg/jdImg";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import styles from './proejctsStyles.module.scss';

export function JdObApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Design a project management application that improves both internal and external communication while increasing revenue, quality of work, and improving work-life balance.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Time management</li>
                <li>Dashboards</li>
                <li>Advanced search and filtering</li>
                <li>Project hierarchy (IA)</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>The first and most important step was research. I interviewed agency staff at all levels and identified common problems across teams.</p>

            <p className={styles.projectGapReducer}>Persona groups:</p>
            <ul>
                <li>Senior management</li>
                <li>Middle management</li>
                <li>Project and product managers</li>
                <li>Account executives</li>
                <li>Designers, writers, and developers</li>
            </ul>

            <p className={styles.projectGapReducer}>Primary problems that I felt the app could help with:</p>
            <ul>
                <li>Too many meetings solely focused on "what's the latest?"</li>
                <li>Important updates were posted in Slack and hard for PMs to track</li>
                <li>Time tracking was mentally exhausting and time-consuming for staff members</li>
                <li>Middle management and lower level staff needed more visibility into upcoming work</li>
            </ul>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>The most challenging aspect wasn't generating designs, but establishing an execution plan. Specifically, determining the starting point and defining the intermediate and long-term objectives.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/obProto4.webp?alt=media"
                    alt="Dashboard for a project"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/obProto5.webp?alt=media"
                    alt="Dashboard with calendar of tasks"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototypes for a project overview screen and a timeline view for lower level staff</figcaption>


            <p>We focused on giving project managers actionable overviews while giving lower level staff a view of their day, week, and month.</p>

            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/obProto1.webp?alt=media"
                alt="Dashboard for a company"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototype for an executive dashboard</figcaption>

            <p>I found that a robust search feature was super important to almost all of our persona groups, so I spent quite some time making sure that I had useful filtering options and digestible results.</p>

            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/obProto3.webp?alt=media"
                alt="Search features"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototype of the advanced "global" search ui</figcaption>

            {/* RESULTS */}
            <JdProjectSubHeader {...jdStringUtils.results} />
            <p>We shipped the app to about <strong>4 large beta clients</strong>, who all had excellent feedback. We met with staff members weekly to solicit honest feedback (formally and adhoc) and tried to make room for incremental changes while maintaining our planned roadmap.</p>

            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/obProto2.webp?alt=media"
                style={{ boxShadow: 'unset' }}
                alt="Mobile login page"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototype of the login page on mobile</figcaption>

            <p>Clients and internal staff really loved the asset management features, project status interactions (updates), and the ability to search contextually (project, company-wide, client-specific, etc).</p>

        </>
    )
}