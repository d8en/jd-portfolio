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

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Concicely communicate the core benefits of the <Link to={jdProjectStore.getLinkToProject(jdProjectStore.rekApp)}>Rek app</Link> in a single page scrolling website.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Interseciton observer API (scroll interactions)</li>
                <li>Page loader with css animations</li>
                <li>Slideout with download links, contact, and privacy policy</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>The only major challenges were figuring out a tagline and how to avoid information overload.</p>

            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekWebProto.webp?alt=media"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots an initial prototype with a tagline.</figcaption>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>After figuring out a tagline and general message I wanted to communicate, I put together a very simple single page scrolling site.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekWebProto2.webp?alt=media"
                    style={{ maxHeight: 700 }}
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekWebProto3.webp?alt=media"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of the website prototype.</figcaption>

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />
            <p>It only took a day or so to decide it was time to build the site. I'll admit, I was very anxious to ship Rek but tried to stay patient over the finish line.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot2.webp?alt=media"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot.webp?alt=media"
                    style={{ placeSelf: 'center' }}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots from the website.</figcaption>

            <p>Using the <JdATag href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">Intersection Observer API</JdATag> was quite interesting. It was something I had always wanted to explore and I'm glad I didn't reach for a library for the scroll interactions.</p>

            {/* RESULTS */}
            <JdProjectSubHeader {...jdStringUtils.results} />
            <p>In the first month, I had around 400 unique hits on the site with 200+ user downloads across Android and iOS.</p>

            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/rekScreenshot3.webp?alt=media"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots from the app store listing.</figcaption>

            <p><JdATag href="https://rekit.app/">This site</JdATag> drove app downloads and was a great way to spark interest in those curious about the app.</p>
        </>
    )
}