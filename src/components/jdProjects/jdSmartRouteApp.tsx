import jdStringUtils from '../../utils/jdStringUtils';
import { JdATag } from '../jdATag/jdATag';
import { JdImg } from '../jdImg/jdImg';
import { JdProjectSubHeader } from '../jdProjectSubHeader/jdProjectSubHeader';
import { JdVimeoPlayer } from '../jdVimeoPlayer/jdVimeoPlayer';
import styles from './proejctsStyles.module.scss';

export function JdSmartRouteApp(): React.JSX.Element {
    return (
        <>
            {/* PRODUCT */}
            <JdProjectSubHeader {...jdStringUtils.finished} />
            <p>Below is a demo of the smart routing admin app I designed and built.</p>

            <JdVimeoPlayer
                src='https://player.vimeo.com/video/842533893?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                className={styles.projectVideo}
                style={{ width: '100%', height: 'auto', padding: 0 }}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live demo of the Smart Route admin screens</figcaption>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Build an app for large retailers that automatically route returns to the most cost-effective and profitable location.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Browser drag and drop APIs</li>
                <li>Google maps API</li>
                <li>Framer motion (lifecycle animations)</li>
                <li>CSS Grid (vs Flexbox)</li>
                <li>React router hooks</li>
                <li>Typeahead drop down input (single select)</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>How could we avoid both overstock and stockouts caused by traditional return routing? Could I build one app that works for any large retailer given the complexity and customizations around return logistics?</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteNotes1.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Sticky notes from our discussion"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteNotes2.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Sticky notes from our discussion"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteNotes3.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Sticky notes from our discussion"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of our whiteboarding discussions</figcaption>

            <p>We worked through several flows, detailing user experience and web service design. The challenges were building the right amount of flexibility and customization and making onboarding simple.</p>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>The majority of my design time was spent on the <strong>drag and drop interface</strong> for customizing return logic.</p>

            <p>While I was designing, I was also familiarizing myself with the browser's <JdATag href='https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API'>drag and drop API</JdATag>.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteConditions2.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Prototype of the conditional logic"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteConditions1.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Prototype of the conditional logic"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototypes of the custom conditions screen (two versions)</figcaption>

            <p>The only other complexity around the design was creating intuitive relationships between things like returned items, allowed return destinations, and custom properties.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteProto1.webp?alt=media'
                className={styles.projectsImage}
                alt="Prototype of the rule setup"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototype of the rule override screen</figcaption>

            <p>When I design dashboards, I want to show actionable data. Both of our co-founders had a ton of experience in return logistics so I worked with them to understand what a retailer needs to do with the data they're presented here. Then, I design the views and iterate with them.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteProto4.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Prototype of the dashboard"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteProto2.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Prototype of the dashboard"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototypes of the dashboards</figcaption>

            <p>I also designed the experience for retail staff to process returns in store.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/inStoreProto1.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ borderRadius: 20 }}
                    alt="Prototype of the retailer scanning items in store"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/inStoreProto2.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ borderRadius: 20 }}
                    alt="Prototype of the retailer scanning items in store"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/inStoreProto3.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ borderRadius: 20 }}
                    alt="Prototype of the retailer scanning items in store"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototypes of the in-store experience</figcaption>

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />
            <p>I started with the simple pieces like return items, destinations, custom properties, and basic rule setup.</p>

            <p>Eventually, I started to tie all of the objects together and started to work on the <strong>biggest challenge: custom rule overrides</strong>.</p>

            <JdVimeoPlayer
                src='https://player.vimeo.com/video/842533893?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                className={styles.projectVideo}
                style={{ width: '100%', height: 'auto', padding: 0 }}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live demo of the Smart Route admin screens</figcaption>

            {/* RESULTS */}
            <JdProjectSubHeader {...jdStringUtils.results} />
            <p>Within about two months, I had gone from concepts to a production ready app with <strong>robust client customization and an endpoint for clients to use</strong>.</p>

            <p>We were gaining traction with <strong>three large national retailers</strong> who immediately saw the benefit of our app and the ease of use.</p>

        </>
    )
}