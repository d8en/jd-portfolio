import jdStringUtils from "../../utils/jdStringUtils";
import { JdImg } from "../jdImg/jdImg";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import styles from './proejctsStyles.module.scss';

export function JdRekApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Create an app where friends could track recommendations from friends.</p>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>I came up with this idea around 10 years ago and evolved it quite a bit since then.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekNotes.webp?alt=media'
                className={styles.projectsImage}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Data model diagram for rek.</figcaption>

            <p>What started as a "movie and tv show recommendation app", evolved into a "recommend anything with a link".</p>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>All of these designs were inspired by grass-roots research (socializing the designs with friends and family).</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekProto3.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ boxShadow: 'unset' }}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekProto4.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ boxShadow: 'unset' }}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekProto5.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ boxShadow: 'unset' }}
                />
            </div>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekProto7.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ boxShadow: 'unset' }}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekProto1.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ boxShadow: 'unset' }}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekProto2.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ boxShadow: 'unset' }}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototype screenshots of the various versions of Rek I had designed.</figcaption>

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />

        </>
    )
}