import jdStringUtils from '../../utils/jdStringUtils';
import { JdImg } from '../jdImg/jdImg';
import { JdProjectSubHeader } from '../jdProjectSubHeader/jdProjectSubHeader';
import { JdVimeoPlayer } from '../jdVimeoPlayer/jdVimeoPlayer';
import styles from './proejctsStyles.module.scss';

export function JdSmartRouteApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Build a web service and self-service admin app for retailers to help them optimize their return logistics.</p>

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
            <p>How could we build an app that any national retailer could use to optimize return logistics? What cusotmizations would they need? How could we optimized the return path down to the cent?</p>

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

            <p>We sketched out all of the 'return flows' for all of the scenarios we had heard from clients and prospects. We came up with a flexible model that made it simple to onboard but allowed for the advanced flexibility these retailers needed.</p>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>The majority of my design time was spent on drag and drop interface for customizing return logic. It was a blast and after a few iterations we were ready to build.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteConditions1.webp?alt=media'
                    className={styles.projectsImage}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteConditions2.webp?alt=media'
                    className={styles.projectsImage}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototypes of the custom conditions screen (two versions)</figcaption>

            <p>The only other complexity around the design was creating intuitive relationships between things like returned items, allowed return destinations, and their custom properties.</p>
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

            <p>We also put together a prototype for retail staff to process returns that were brought direclty to a retail location.</p>

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

            <JdVimeoPlayer
                src='https://player.vimeo.com/video/842533893?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                className={styles.projectVideo}
                style={{ width: '100%', height: 'auto', padding: 0 }}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Live demo of the Smart Route admin screens</figcaption>

            <p>Eventually, we started to tie all of the objects together and started to work on the biggest challenge: custom rule overrides.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouting3.webp?alt=media'
                className={styles.projectsImage}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshot of the custom conditions page</figcaption>

            {/* RESULTS */}
            <JdProjectSubHeader {...jdStringUtils.results} />
            <p>Within about two months, we had gone from conceptions to a production ready app with a robust client customization UI and an endpoint for clients to use.</p>

            <p>We were gaining traction with three large national retailers who immediately saw the benefit of our app and the ease of use.</p>

        </>
    )
}