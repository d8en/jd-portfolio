import jdStringUtils from "../../utils/jdStringUtils";
import { JdImg } from "../jdImg/jdImg";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import styles from './proejctsStyles.module.scss';

export function JdGameGuess(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Create a game where players guess the name of a Steam game based on the given clues.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Steam API</li>
                <li>Scoring structure</li>
                <li>Suggestive typeahead with game selection</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>I first needed to figure out "clues" I could present, based on what the Steam API could provide.</p>

            <p>When you fetch details for a specific game, you get all sorts of wonderful information but the tricky part was trimming that down to what could be a helpful clue, but didn't give away the game.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/gameG8.webp?alt=media'
                className={styles.projectsImage}
                alt="Game guesser screenshot"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshot of the typescript interface used for the game detail</figcaption>

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />
            <p>I designed the primary screens then came up with the scoring mechanics. I thought it might be fun if the players lost points for every clue they used, with some clues costing more points than others (eg: screenshots are more telling).</p>

            <p>I also built a custom typeahead search input that looked up games as you typed.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/gameG7.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Game guesser screenshot"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/gameG6.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Game guesser screenshot"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/gameG5.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Game guesser screenshot"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/gameG1.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Game guesser screenshot"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of the game guesser app on mobile</figcaption>

            {/* RESULTS */}
            <JdProjectSubHeader {...jdStringUtils.results} />
            <p>I tested this out with a couple groups of friends via Discord, iterated, then played again.</p>

            <p>These were the general <strong>takeaways</strong>:</p>
            <ul>
                <li>The screenshots were always very telling</li>
                <li>Masking the game name in the description was super important</li>
                <li>The release date wasn't very helpful</li>
                <li>Reviews were surprisingly helpful in some cases and very entertaining in others</li>
            </ul>

        </>
    )
}