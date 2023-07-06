import jdStringUtils from "../../utils/jdStringUtils";
import { JdImg } from "../jdImg/jdImg";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import styles from './proejctsStyles.module.scss';


export function JdTypoApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Create a text-based social media app that shows the reader exactly how the post was written.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Animated donut timer</li>
                <li>Record and playback of keystrokes and selections</li>
                <li>Minimal text input</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>The only major challenge was getting familiar with how I could record text selections.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/typoSs1.webp?alt=media'
                className={styles.projectsImage}
                style={{ borderRadius: 24 }}
            />

            <p>Aside from that, I also wanted a feature that allowed the reader to adjust the playback speed of the post (ex: 2x, 4x, 8x).</p>

        </>
    )
}