import jdStringUtils from "../../utils/jdStringUtils";
import { JdATag } from "../jdATag/jdATag";
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
                <li>TikTok style scroll locking</li>
                <li>Super minimal text input</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>The only major challenge was getting familiar with how I could record text selections, then replaying them with the same timing as they were entered.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/typoSs1.webp?alt=media'
                className={styles.projectsImage}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live screenshot of the "create post" screen</figcaption>

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
            <figcaption className={styles.projectImageCaption}>Initial designs for the writing and reading screens</figcaption>

            <p>This was the first time I would create an animated donut (for the countdown) in React Native, and I did not want to reach for a library.</p>

            <p>I'm familiar with the <JdATag href="https://reactnative.dev/docs/animated">RN Animated API</JdATag>, but I had been reading a lot about <JdATag href="https://docs.swmansion.com/react-native-reanimated/docs">Reanimated</JdATag> and really wanted to give it a shot.</p>

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />
            <p>I started with figuring out how to animate the donut timer, using the <JdATag href="https://docs.swmansion.com/react-native-reanimated/docs">Reanimated library</JdATag>. After that, I spent the majority of the time building the mechanism to track selection changes and the timing of each keystroke so that I could play it back accurately.</p>

            <JdVimeoPlayer
                src="https://player.vimeo.com/video/842887806?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                className={styles.projectVideo}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live demo of the typo app on an iPhone</figcaption>

            <p>I built a simple "feed" page that displays each post in a scroll-locking (TikTok) style, with playback options like restart, pause, and playback speed.</p>

        </>
    )
}