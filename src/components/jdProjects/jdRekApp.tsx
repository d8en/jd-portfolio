import jdStringUtils from "../../utils/jdStringUtils";
import { JdATag } from "../jdATag/jdATag";
import { JdImg } from "../jdImg/jdImg";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import { JdVimeoPlayer } from "../jdVimeoPlayer/jdVimeoPlayer";
import styles from './proejctsStyles.module.scss';

export function JdRekApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Create <JdATag href="https://rekit.app/">an app</JdATag> where friends could track recommendations amongst friends.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Custom link preview scraper</li>
                <li>Native share activity ("share with")</li>
                <li>Social data models (friends, commenting, etc.)</li>
                <li>Push notifications</li>
                <li>Image upload</li>
                <li>App update enforcement</li>
                <li>Promotinal vidoes</li>
            </ul>

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

            <p>I love when I get the chance to design my own icons. There are so many great icon sets out there, so it's not the most efficient thing to do but I enjoy it.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekIcons.webp?alt=media'
                className={styles.projectsImage}
                style={{ borderRadius: 20 }}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Icon sets used I designed for Rek.</figcaption>

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />
            <p>I finally carved out time to start building the app, starting with a super quick prototype using Firebase functions and their NoSQL implementation (Cloud Firestore).</p>

            <p>This was a quick way to get the app into alpha (~1 month), but I decided to migrate the database to MySql</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot8.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ borderRadius: 20 }}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot7.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ borderRadius: 20 }}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot11.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ borderRadius: 20 }}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live screenshots of the Rek it app.</figcaption>

            <p>The relationships between friends, the conversations, and the notification features were all fun challenges.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot3.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ borderRadius: 20 }}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot1.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ borderRadius: 20 }}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot5.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ borderRadius: 20 }}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live screenshots of the Rek it app.</figcaption>

            {/* RESULTS */}
            <JdProjectSubHeader {...jdStringUtils.results} />
            <p>I will always remember the day I shipped <JdATag href="https://rekit.app/">Rek</JdATag>. People were so supportive and it was so exciting to see people using the app.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot4.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ borderRadius: 20 }}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot6.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ borderRadius: 20 }}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot12.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ borderRadius: 20 }}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live screenshots of the Rek it app.</figcaption>

            <p>Launch day and the following weeks were fun, exciting, and stressful with the app attracting 200+ users and over 1,000 recommendations within the first month!</p>

            <JdVimeoPlayer
                src='https://player.vimeo.com/video/842604161?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                className={styles.projectVideo}
                style={{ width: '100%', minHeight: 'unset', padding: 12 }}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Video created with live screen recordings and After Effects (music by me as well).</figcaption>

            <p>You can download the app <JdATag href="https://rekit.app/">here</JdATag> (Android and iOS).</p>

        </>
    )
}