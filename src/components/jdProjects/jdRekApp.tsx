import jdStringUtils from "../../utils/jdStringUtils";
import { JdATag } from "../jdATag/jdATag";
import { JdImg } from "../jdImg/jdImg";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import { JdVimeoPlayer } from "../jdVimeoPlayer/jdVimeoPlayer";
import styles from './proejctsStyles.module.scss';

export function JdRekApp(): React.JSX.Element {
    return (
        <>

            {/* PRODUCT */}
            <JdProjectSubHeader {...jdStringUtils.finished} />
            <p>You can download the app via <JdATag href="https://rekit.app/">the website I designed and built</JdATag> to promote it!</p>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Create an app where friends can track recommendations amongst friends.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Site scraper for link previews</li>
                <li>Native share activity ("share with")</li>
                <li>Haptics</li>
                <li>Social data models (friends, commenting, etc.)</li>
                <li>Push notifications</li>
                <li>Image upload</li>
                <li>App update enforcement</li>
                <li>Promotional videos</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>I came up with this idea around 10 years ago and evolved it quite a bit since then.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekNotes.webp?alt=media'
                className={styles.projectsImage}
                alt="Database diagram"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Data model diagram for rek </figcaption>

            <p>What started as a "movie and tv show recommendation app", evolved into a "recommend anything with a link" app.</p>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>All of these designs were inspired by grass-roots research (socializing the designs with friends and family).</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekProto3.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ boxShadow: 'unset' }}
                    alt="Initial prototype of the app"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekProto4.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ boxShadow: 'unset' }}
                    alt="Initial prototype of the app"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekProto5.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ boxShadow: 'unset' }}
                    alt="Initial prototype of the app"
                />
            </div>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekProto7.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ boxShadow: 'unset' }}
                    alt="Initial prototype of the app"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekProto1.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ boxShadow: 'unset' }}
                    alt="Initial prototype of the app"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekProto2.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ boxShadow: 'unset' }}
                    alt="Initial prototype of the app"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototype screenshots of the various versions of Rek I had designed</figcaption>

            <p>I love when I get the chance to <strong>design my own icons</strong>. There are so many great icon sets out there, so it's not something I often get to do on most projects.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekIcons.webp?alt=media'
                className={styles.projectsImage}
                alt="Icons designed by me"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Icons I designed for Rek</figcaption>

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />
            <p>I finally carved out time to start building the app, starting with a super quick prototype using Firebase functions and their NoSQL implementation (Cloud Firestore).</p>

            <p>This was a quick way to get the app into alpha (~1 month), but I decided to migrate the database to MySql as it felt much easier to manage the more complex relationships (friends, commenting, search, etc.).</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot7.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Top reks page"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot11.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Top reks page filtered"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot8.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Top reks page"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live screenshots of the Rek it app</figcaption>

            <p>The relationships between friends, the conversations, and the notification features were all fun challenges.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot3.webp?alt=media'
                    className={styles.projectsImage}
                    alt="App listing in the iOS app store"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot1.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Profile page"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot5.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Comment section of a rek"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live screenshots of the Rek it app</figcaption>

            {/* RESULTS */}
            <JdProjectSubHeader {...jdStringUtils.results} />
            <p>I will always remember the day I shipped <JdATag href="https://rekit.app/">Rek</JdATag>. People were so supportive and it was so exciting to see people using the app.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot4.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Send a rek page"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot6.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Top reks page"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot12.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Update app prompt"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live screenshots of the Rek it app</figcaption>

            <p>Launch day and the following weeks were fun, exciting, and stressful with the app attracting <strong>200+ users</strong> and over <strong>1,000 recommendations</strong> in the first month!</p>

            <JdVimeoPlayer
                src='https://player.vimeo.com/video/842604161?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                className={styles.projectVideo}
                style={{ width: '100%', minHeight: 'unset', padding: 12 }}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Video created with live screen recordings and After Effects (music by me as well)</figcaption>

            <p>You can download the app <JdATag href="https://rekit.app/">here</JdATag> (Android and iOS).</p>

        </>
    )
}