import jdStringUtils from "../../utils/jdStringUtils";
import { JdATag } from "../jdATag/jdATag";
import { JdImg } from "../jdImg/jdImg";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import styles from './proejctsStyles.module.scss';

export function JdNightCat(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Design a brand for a <JdATag href="https://nightcatproductions.com/">snarky weather app</JdATag>.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Typeface design</li>
                <li>Cat silhouette</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>I met with the founder to review their vision for the brand and talked through a few concepts.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/nightcatSs4.webp?alt=media'
                className={styles.projectsImage}
                style={{ boxShadow: 'unset' }}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Finished logo</figcaption>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>The trickiest part was getting the cat silhouette just right.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/nightcatSs1.webp?alt=media'
                className={styles.projectsImage}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Finished logo</figcaption>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/nightcatSs2.webp?alt=media'
                className={styles.projectsImage}
            />

        </>
    )
}