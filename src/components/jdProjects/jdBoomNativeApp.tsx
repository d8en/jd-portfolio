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
            <p>Build a native mobile app for shoppers to manage all of their returns, while offering home pickup and providing retailer benefits.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Native camera label scanning</li>
                <li>Real-time OCR on shipping labels (image text recognition)</li>
                <li>Custom integrated webview</li>
                <li>Webview injection for shipping label upload</li>
                <li>Animated hovering keyboard input</li>
                <li>Swipeable tutorial walkthrough</li>
                <li>Contextual help menus</li>
                <li>Pan responder gestures for slideups / dismissal</li>
                <li>Swipeable scroll paging</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>How could we integrate with so many stores? What type of integration would we need? What were the major problems around the returns experience for shoppers? How could retailers benefit?</p>

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
            <figcaption className={styles.projectImageCaption}>Screenshots of our whiteboarding discussions</figcaption>

            <p>We identified the top retailers who were likely to have the most returns and found ways to optimize those integration efforts (ex: integrate with a provider that covered many stores).</p>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>The shopper experience was quite different from our <Link to={jdProjectStore.getLinkToProject(jdProjectStore.shopifyApp)}>Shopify apps</Link>, so I started with a clean slate.</p>

            <p>We studied the top retailer returns experiences and came up with a flow that combined all of our favorite parts.</p>

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
            <figcaption className={styles.projectImageCaption}>Screenshots of our mobile prototype</figcaption>

            <p>We went with a dark mode as our primary theme, but planned to add custom theming later on.</p>

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />
            <p>We integrated <strong>40+ stores</strong> and also spent a good amount of time optimizing our experience for stores we weren't integrated with.</p>

            {/* STORE INTEGRATION */}
            <JdVimeoPlayer
                src='https://player.vimeo.com/video/841963693?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                className={styles.projectVideo}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live demo of an integrated returns experience</figcaption>

            <p className={styles.projectGapReducer}>Our multi-project monorepo architecture from our <Link to={jdProjectStore.getLinkToProject(jdProjectStore.shopifyApp)}>Shopify app</Link> was beneficial in a few ways:</p>

            <ul>
                <li>Most of the global state was already defined (view models)</li>
                <li>State update methods</li>
                <li>API definitions and methods</li>
                <li>Fixing bugs in one place</li>
            </ul>

            <p>Overall, big fan of the monorepo structure but it did take some extra time to "draw the line" on what could be shared. We caught ourselves adding unnecessary complexity a few times just to share small pieces of code.</p>

            <p>I had a lot of fun implementing a <strong>live-scanning</strong> feature where users could scan return shipping labels to prefill information such as carrier, tracking, and return address.</p>

            {/* LABEL SCANNING CAMERA */}
            <JdVimeoPlayer
                src='https://player.vimeo.com/video/841964299?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                className={styles.projectVideo}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live demo of real-time OCR scanning with native camera view</figcaption>

            <p>It was also quite interesting to implement our own <strong>fully customized webview</strong>, with injections that let users submit a return on a third party site and upload information directly to us.</p>

            {/* TAP TO UPLOAD LABEL */}
            <JdVimeoPlayer
                src='https://player.vimeo.com/video/841963743?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                className={styles.projectVideo}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live demo of the 'tap to upload' feature within an integrated webview</figcaption>

            <p>I also built a swipple tutorial and contextual help menu that showed help messages relevant to the page and the state of the app.</p>

            {/* TUTORIAL */}
            <JdVimeoPlayer
                src='https://player.vimeo.com/video/842506013?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                className={styles.projectVideo}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live demo of the contextual help and intro "swipeable" tutorial</figcaption>

            <p>During our alpha testing, we found that breaking up the return process into more "pages" with fewer selections on each page felt faster and easier for the shoppers to digest.</p>

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

            {/* RESULTS */}
            <JdProjectSubHeader {...jdStringUtils.results} />
            <p>We grew our beta group to <strong>200+ users</strong>, who submitted returns with pickups across <strong>20+ stores</strong>.</p>
            <p>For serial returners, the most valuable feature was having a centralized place to submit and manage returns. After that, home pickup was a close second.</p>

            {/* HOME PAGE */}
            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativeLiveSs4.webp?alt=media"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshot of our home page, showing all pending and past returns</figcaption>

            <p>We were a few steps away from publishing the app when an <Link to={jdProjectStore.getLinkToProject(jdProjectStore.boomSmartApp)}>exciting opportunity</Link> for one of our other products came up.</p>


        </>
    )
}