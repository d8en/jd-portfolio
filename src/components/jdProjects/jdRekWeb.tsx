import { Link } from "react-router-dom";
import jdStringUtils from "../../utils/jdStringUtils";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import jdProjectStore from "../../stores/jdProjectStore";
import styles from './proejctsStyles.module.scss';
import { JdImg } from "../jdImg/jdImg";
import { JdATag } from "../jdATag/jdATag";

export function JdRekWeb(): React.JSX.Element {
    return (
        <>

            {/* PRODUCT */}
            <JdProjectSubHeader {...jdStringUtils.finished} />
            <p>Checkout the <JdATag href="https://rekit.app/">finished website here</JdATag>!</p>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Communicate the value of the <Link to={jdProjectStore.getLinkToProject(jdProjectStore.rekApp)}>Rek app</Link> in a single page scrolling website.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Intersection observer API (scroll interactions)</li>
                <li>Page loader with css animations</li>
                <li>Slideout with download links, contact, and privacy policy</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>The only major challenges were figuring out a tagline and how to avoid information overload.</p>

            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekWebProto.webp?alt=media"
                alt="Prototype of the landing page"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots an initial prototype with a tagline</figcaption>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>After figuring out a tagline and general messaging, I put together a very simple single page scrolling site.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekWebProto2.webp?alt=media"
                    style={{ maxHeight: 500 }}
                    alt="Prototype of the entire website"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekWebProto3.webp?alt=media"
                    alt="Prototype of the download app page"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of the website prototype</figcaption>

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />
            <p>I'll admit, it was hard to be patient with this website. I had been dreaming of Rek for so long but I forced myself to take my time with this last piece.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot2.webp?alt=media"
                    alt="Landing page on mobile"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot.webp?alt=media"
                    style={{ placeSelf: 'center' }}
                    alt="Landing page with download slideout on desktop"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots from the website</figcaption>

            <p>Using the <JdATag href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">Intersection Observer API</JdATag> was quite interesting. It was something I had always wanted to explore and I'm glad I didn't reach for a library for the scroll interactions.</p>

            {/* RESULTS */}
            <JdProjectSubHeader {...jdStringUtils.results} />
            <p>In the first month, I had <strong>400+ unique hits</strong> on the site with <strong>200+ user downloads</strong> across Android and iOS.</p>

            <p>You can <JdATag href="https://rekit.app/">checkout the site here</JdATag>.</p>

            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot3.webp?alt=media"
                alt="Mobile app listed on iOS app store"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots from the app store listing</figcaption>

            <p>Users seemed to really love the social aspect around recommendations. Most people didn't care so much about remembering the recommendation but genuinely enjoyed the conversation around it.</p>
        </>
    )
}