import jdStringUtils from '../../utils/jdStringUtils';
import { JdATag } from '../jdATag/jdATag';
import { JdImg } from '../jdImg/jdImg';
import { JdProjectSubHeader } from '../jdProjectSubHeader/jdProjectSubHeader';
import styles from './proejctsStyles.module.scss';

export function JdNightCat(): React.JSX.Element {
    return (
        <>
            {/* PRODUCT */}
            <JdProjectSubHeader {...jdStringUtils.finished} />
            <p>
                Checkout the <JdATag href="https://nightcatproductions.com/">brand in action</JdATag> on the Nightcat Productions website. Below is a mockup of the finished logo and wordmark I
                designed.
            </p>

            <JdImg
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/nightcatSs4.webp?alt=media"
                className={styles.projectsImage}
                alt="Logo on a mobile device"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Finished logo</figcaption>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>
                Design a brand for a <JdATag href="https://nightcatproductions.com/">snarky weather app</JdATag>.
            </p>

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
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/nightcatSs4.webp?alt=media"
                className={styles.projectsImage}
                alt="Logo on a mobile device"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Finished logo</figcaption>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>The trickiest part was getting the cat silhouette just right. After that, I designed fairly simple sans serif letters in all caps.</p>

            <JdImg
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/nightcatSs2.webp?alt=media"
                className={styles.projectsImage}
                style={{ width: '100%' }}
                alt="Logo on a mobile device"
            />

            <JdImg
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/nightcatSs1.webp?alt=media"
                className={styles.projectsImage}
                style={{ width: '100%', objectFit: 'fill' }}
                alt="Logo mockup"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Finished logo</figcaption>

            <p>It was clear that the founder's cat ruled his life, as it demanded to be the focal point of the entire company's brand.</p>
        </>
    );
}
