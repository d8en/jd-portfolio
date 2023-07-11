import jdStringUtils from "../../utils/jdStringUtils";
import { JdImg } from "../jdImg/jdImg";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import styles from './proejctsStyles.module.scss';

export function JdWeekend(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Some of these had no goal, some did and it wasn't reached. That's the beauty of side projects, there's no pressure and only chosen constraints.</p>

            <h2 className={styles.projectGapReducer}>Air Quality Index Notification</h2>
            <p>I built a <strong>Node.js web service</strong> to periodically check the air quality in my area during the 2023 Canadian wildfires.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/aqi.webp?alt=media'
                className={styles.projectsImage}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshot of some horrible but working code</figcaption>

            <p>One interesting takeaway - you can't run a periodic service like this in most serverless environments because they all have a (somewhat configurable) timeout. Serverless is a bad choice for something like this anyway (cost).</p>

            <p>I built this because I was tired of checking the AQI site and wanted to play pickleball that week.</p>

        </>
    )
}