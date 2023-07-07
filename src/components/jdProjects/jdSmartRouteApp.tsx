import jdStringUtils from '../../utils/jdStringUtils';
import { JdATag } from '../jdATag/jdATag';
import { JdImg } from '../jdImg/jdImg';
import { JdProjectSubHeader } from '../jdProjectSubHeader/jdProjectSubHeader';
import { JdVimeoPlayer } from '../jdVimeoPlayer/jdVimeoPlayer';
import styles from './proejctsStyles.module.scss';

export function JdSmartRouteApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Build an app that allows retailers to automatically route returns to the most cost-effective location.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Browser drag and drop APIs</li>
                <li>Typeahead drop down input (single select)</li>
                <li>CSS Grid (vs Flexbox)</li>
                <li>Google maps API</li>
                <li>React router hooks</li>
                <li>Framer motion (lifecycle animations)</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>How could we build an app for any national retailer? What customizations would each need? How could we optimize return logistics?</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteNotes1.webp?alt=media'
                    className={styles.projectsImage}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteNotes2.webp?alt=media'
                    className={styles.projectsImage}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteNotes3.webp?alt=media'
                    className={styles.projectsImage}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of our whiteboarding discussions</figcaption>

            <p>We drew up several return flows, including how our web services would work for clients. The main challenge was building the right amount of customization while keeping onboarding simple.</p>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>The majority of my design time was spent on the <strong>drag and drop interface</strong> for customizing return logic.</p>

            <p>While I was designing, I was also familiarizing myself with the browser's <JdATag href='https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API'>drag and drop API</JdATag>.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteConditions2.webp?alt=media'
                    className={styles.projectsImage}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteConditions1.webp?alt=media'
                    className={styles.projectsImage}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototypes of the custom conditions screen (two versions)</figcaption>

            <p>The only other complexity around the design was creating intuitive relationships between things like returned items, allowed return destinations, and custom properties.</p>
            <p>I always enjoy designing dashboards and this one turned out to be quite a useful one for national retailers.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteProto1.webp?alt=media'
                    className={styles.projectsImage}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteProto2.webp?alt=media'
                    className={styles.projectsImage}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototypes of the dashboard and rule override screens</figcaption>

            <p>I also designed the experience for retail staff to process returns in store.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/inStoreProto1.webp?alt=media'
                    className={styles.projectsImage}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/inStoreProto2.webp?alt=media'
                    className={styles.projectsImage}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/inStoreProto3.webp?alt=media'
                    className={styles.projectsImage}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototypes of the in-store experience</figcaption>

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />
            <p>We started with the simple pieces like return items, destinations, custom properties, and basic rule setup.</p>

            <p>Eventually, we started to tie all of the objects together and started to work on the biggest challenge: custom rule overrides.</p>

            <JdVimeoPlayer
                src='https://player.vimeo.com/video/842533893?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                className={styles.projectVideo}
                style={{ width: '100%', height: 'auto', padding: 0 }}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live demo of the Smart Route admin screens</figcaption>

            {/* RESULTS */}
            <JdProjectSubHeader {...jdStringUtils.results} />
            <p>Within about two months, we had gone from conceptions to a production ready app with a <strong>robust client customization UI and an endpoint for clients to use</strong>.</p>

            <p>We were gaining traction with <strong>three large national retailers</strong> who immediately saw the benefit of our app and the ease of use.</p>

        </>
    )
}