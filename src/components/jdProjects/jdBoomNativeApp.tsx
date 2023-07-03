import { Link } from "react-router-dom";
import jdStringUtils from "../../utils/jdStringUtils";
import { JdImg } from "../jdImg/jdImg";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import styles from './proejctsStyles.module.scss';
import jdProjectStore from "../../stores/jdProjectStore";
import { JdVimeoPlayer } from "../jdVimeoPlayer/jdVimeoPlayer";

export function JdBoomNativeApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Make it easier for consumers to manage all of their returns, while offering home-pickup for all stores and providing retailer benefits like smart return routing.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Native camera interactions for label scanning</li>
                <li>OCR Scanning for shipping labels</li>
                <li>Custom integrated webview</li>
                <li>Tap to upload label from webview</li>
                <li>Hovering keyboard input</li>
                <li>Intro tutorial walkthrough</li>
                <li>Contextual help menus</li>
                <li>Pan responder gestures for slideups</li>
                <li>Swipable scroll paging</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>There were a handful of some interesting challenges and questions. How could build store integration across so many stores? What type of integration would we need? What were the major problems around the returns experience for shoppers? How could retailers benefit?</p>

            {/* NOTES SCREENSHOT */}
            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativeNotes1.webp?alt=media"
            />
            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativeNotes2.webp?alt=media"
            />
            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativeNotes3.webp?alt=media"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of our whiteboarding discussions.</figcaption>

            <p>We built a list of the top stores to integrate with and found ways to optimize those integration efforts (ex: integrate with a provider that covered many stores).</p>

            <p>The architecture we built for our <Link to={jdProjectStore.getLinkToProject(jdProjectStore.shopifyApp)}>Shopify app</Link> allowed us share code, which helped us get this product built faster but also avoided common problems around "fixing bugs in two places".</p>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>The experience was quite different from our <Link to={jdProjectStore.getLinkToProject(jdProjectStore.shopifyApp)}>Shopify app</Link>S, so I started with a clean slate. We choose a dark mode for various reasons, but planned to add theming later on.</p>

            {/* PROTOTYPE SCREENSHOTS */}
            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativeSs3.webp?alt=media"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativeSs5.webp?alt=media"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativeSs4.webp?alt=media"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of our mobile prototype.</figcaption>

            <p>We studied top retailer returns experiences and came up with a general flow that we could start building out.</p>

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />

            <p>We integrated with around 40 stores and also spent a good amount of time optimizing our experience for stores we weren't integrated with.</p>

            {/* STORE INTEGRATION */}
            <JdVimeoPlayer
                src='https://player.vimeo.com/video/841963693?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                className={styles.projectVideo}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live demo of an integrated returns experience.</figcaption>

            <p>I had a lot of fun implementing a live-scanning feature where users could scan return shipping labels to prefil informations such as carrier, tracking, and return address.</p>

            {/* LABEL SCANNING CAMERA */}
            <JdVimeoPlayer
                src='https://player.vimeo.com/video/841964299?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                className={styles.projectVideo}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live demo of real-time OCR scanning with native camera view.</figcaption>

            <p>It was also quite interesting to implement our own webview, with features to help a user submit a return on a third party site and upload information direclty to us.</p>

            {/* TAP TO UPLOAD LABLE */}
            <JdVimeoPlayer
                src='https://player.vimeo.com/video/841963743?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                className={styles.projectVideo}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live demo of the 'tap to upload' feature within an integrated webview.</figcaption>

            <p>During our alpha testing, we found that breaking up the return process into more pages with fewer selections on each page felt 'faster' and easier to digest.</p>

            {/* LIVE SCREENSHOTS */}
            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativeLiveSs3.webp?alt=media"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativeLiveSs2.webp?alt=media"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativeLiveSs1.webp?alt=media"
                />
            </div>

        </>
    )
}