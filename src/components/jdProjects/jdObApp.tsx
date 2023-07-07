import jdStringUtils from "../../utils/jdStringUtils";
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

        </>
    )
}