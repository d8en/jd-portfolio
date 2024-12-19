import jdStringUtils from '../../utils/jdStringUtils';
import { JdATag } from '../jdATag/jdATag';
import { JdImg } from '../jdImg/jdImg';
import { JdProjectSubHeader } from '../jdProjectSubHeader/jdProjectSubHeader';
import styles from './proejctsStyles.module.scss';

export function JdAether(): React.JSX.Element {
    return (
        <>
            {/* PRODUCT */}
            <JdProjectSubHeader {...jdStringUtils.finished} />
            <p>
                Checkout the <JdATag href="https://www.aitherhealth.com/">brand in action</JdATag> on the Aither website. Below is a mockup of the finished logo and wordmark I designed.
            </p>

            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/aitherSs1.webp?alt=media"
                style={{ boxShadow: 'unset' }}
                alt="Aither brand mockup on a phone"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Mobile mockup with brand and wordmark</figcaption>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Design an insurance brand that feels transparent and refreshing.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Custom typeface</li>
                <li>Wordmark</li>
                <li>Tagline</li>
                <li>Style guide</li>
                <li>Deck template</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>
                Like most founders I've worked with, the <JdATag href="https://www.aitherhealth.com/">aither health</JdATag> folks had a clear vision - cut through the noise and build trust with
                clients.
            </p>

            <p>I met to review their vision, expected deliverables, timelines, and compensation.</p>

            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/aitherNotes.webp?alt=media"
                alt="Sticky notes from our brainstorm discussion"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Whiteboarding notes</figcaption>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>I've always loved typeface design so I created their wordmark from scratch.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/aitherSs1.webp?alt=media"
                    style={{ boxShadow: 'unset' }}
                    alt="Aither brand mockup on a phone"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/aitherSs4.webp?alt=media"
                    alt="Aither brand mockup on a tote bag"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Finished brand mockups</figcaption>

            <p>
                This project was super fast with no revisions needed so all that was left was to prepare the <strong>final assets (style guide, deck template, and logo exports)</strong>.
            </p>

            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/styleGuide4.webp?alt=media"
                    alt="Aither logo with wordmark on blue background"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/styleGuide2.webp?alt=media"
                    alt="Aither wordmark with text styles for the brand defined"
                />
            </div>

            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/styleGuide3.webp?alt=media"
                    alt="Aither wordmark with size definitions"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/styleGuide1.webp?alt=media"
                    alt="Aither logo with all color schemes"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots from the branding guide</figcaption>
        </>
    );
}
