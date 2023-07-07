import jdStringUtils from "../../utils/jdStringUtils";
import { JdImg } from "../jdImg/jdImg";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import { JdVimeoPlayer } from "../jdVimeoPlayer/jdVimeoPlayer";
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
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live screenshot of the "create post" screen.</figcaption>

            <p>Aside from that, I also wanted a feature that allowed the reader to adjust the playback speed of the post (ex: 2x, 4x, 8x). This ended up being pretty simple - use a timeout delay multiplier that is controled by the user.</p>


            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>I wanted a super minimalist approach with almost nothing on the screen except reading and writing.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/typoDesign3.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ boxShadow: 'unset' }}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/typoDesign2.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ boxShadow: 'unset' }}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/typoDesign1.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ boxShadow: 'unset' }}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Initial designs for the writing and reading screens.</figcaption>

            <p>This was the first time I would create an animated donut (for the countdown) in React Native, and I did not want to reach for a library. React Native Reanimated was a perfect utility for this.</p>

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />
            <p>I started with figuring out how to animate the donut timer, using the Reanimated library. After that, I spent the majority of the time building the mechanism to track selection changes and the timing of each keystroke so that I could play it back accurately.</p>

            <JdVimeoPlayer
                src="https://player.vimeo.com/video/842887806?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                className={styles.projectVideo}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live demo of the typo app on an iPhone.</figcaption>

            <p>I built a simple "feed" page that displays each post in a scroll-locking (TikTok) style, with playback options like restart, pause, and playback speed.</p>

        </>
    )
}