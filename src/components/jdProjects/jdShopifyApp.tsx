import { Link } from 'react-router-dom';
import jdStringUtils from '../../utils/jdStringUtils';
import { JdProjectSubHeader } from '../jdProjectSubHeader/jdProjectSubHeader';
import jdProjectStore from '../../stores/jdProjectStore';
import { JdImg } from '../jdImg/jdImg';
import styles from './proejctsStyles.module.scss';
import { JdVimeoPlayer } from '../jdVimeoPlayer/jdVimeoPlayer';
import { JdATag } from '../jdATag/jdATag';

export function JdShoifyApp(): React.JSX.Element {
    return (
        <>
            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Use the lessons learned from our <Link to={jdProjectStore.getLinkToProject(jdProjectStore.airshopApp)}>pilot app</Link> and create a multi-tenant scalable offering for any Shopify store.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Multi-tenancy</li>
                <li>Address input (Google Maps API and USPS API)</li>
                <li>Currency input (USD)</li>
                <li>CSS Grid for tabular data</li>
                <li>Dot loader using CSS animations</li>
                <li>Theming (client-specified primary and secondary colors)</li>
                <li>Email template design</li>
                <li>Icon design</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>We needed to figure out how we could <strong>scale home pickup</strong>.</p>

            {/* NOTES SCREENSHOT */}
            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifNotes1.webp?alt=media"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of our whiteboarding discussions</figcaption>

            <p>Hiring drivers and buying vehicles in every city/state would take too long and would be tough to scale.</p>
            <p>We figured the best economic and even eco-friendly option was to use existing logistics providers (UPS, FedEx, USPS). Each of these providers had APIs that offered pickup, most of which were affordable.</p>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>We had some excellent shopper feedback from our <Link to={jdProjectStore.getLinkToProject(jdProjectStore.airshopApp)}>first returns app</Link>, so we used that to improve interactions, verbiage, and overall design.</p>

            <p className={styles.projectGapReducer}>The <strong>requirements</strong> were similar, with a few extra challenges:</p>

            <ul>
                <li>Self-service client onboarding</li>
                <li>No pickup windows</li>
                <li>Theming (brand colors, logo, etc.)</li>
                <li>Pricing customization</li>
                <li>Package tracking</li>
            </ul>

            {/* SCREENSHOT */}
            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifyScreenshot3.webp?alt=media"
                    style={{ boxShadow: 'unset' }}
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifyScreenshot4.webp?alt=media"
                    style={{ boxShadow: 'unset' }}
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifyScreenshot2.webp?alt=media"
                    style={{ boxShadow: 'unset' }}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of the end user prototype for mobile</figcaption>

            <p>I created new high-fidelity designs from scratch but carried over elements and lessons-learned from the initial app.</p>

            {/* END USER PROTOTYPES */}
            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifyScreenshot1.webp?alt=media"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of the end user prototype for desktop</figcaption>

            {/* ADMIN PROTOTYPE */}
            <p>In addition to the shopper experience, I also designed an app for Shopify admins. This would be used to manage returns processing.</p>

            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifyScreenshot5.webp?alt=media"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of the admin prototype for desktop</figcaption>

            <p>I've always enjoyed icon design so I took some extra time on this project to build our own set.</p>

            <JdImg
                className={styles.projectsImage}
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/iconDesign.webp?alt=media'
            />

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />
            <p className={styles.projectGapReducer}>We built a <strong>monorepo</strong> using Typescript project references, primarily so that we could share DTOs but also to share state management classes/methods across our apps.</p>

            <p className={styles.projectGapReducer}>This was our general structure:</p>
            <ul>
                <li>Base Project (Node and React state management classes and shared models / DTOs)</li>
                <ul>
                    <li>Node (state management classes)</li>
                    <li>React (state management classes)</li>
                    <li>Models (DB and DTO)</li>
                </ul>
                <li>Authentication</li>
                <li>End User React App</li>
                <li>Admin React App</li>
                <li>Node API</li>
                <li>Carrier Integration</li>
            </ul>

            {/* SHOPIFY APP WALKTHROUGH */}
            <JdVimeoPlayer
                src='https://player.vimeo.com/video/841934938?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                className={styles.projectVideo}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Walkthrough of our Shopify app, with an embarrassing narration done by yours truly</figcaption>

            <p>Our monorepo allowed us to use shared code across the admin and end user experiences, while setting us up nicely for our <Link to={jdProjectStore.getLinkToProject(jdProjectStore.boomNativeApp)}>native mobile app</Link>.</p>

            {/* SHOPIFY ADMIN WALKTHROUGH */}
            <JdVimeoPlayer
                src='https://player.vimeo.com/video/841945316?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                style={{ width: '100%' }}
            />

            {/* RESULTS */}
            <JdProjectSubHeader {...jdStringUtils.results} />
            <p>About a month and a half later, we shipped our Shopify app.</p>
            <p>Our marketing team had <strong>3 beta clients</strong> lined up so we demoed the app and onboarded them the following week.</p>

            {/* SHOPIFY APP WALKTHROUGH */}
            <JdVimeoPlayer
                src='https://player.vimeo.com/video/841937403?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                className={styles.projectVideo}
            />
            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Video walkthrough of the Shopify app from our first client</figcaption>

            <p>Two months later, we had <strong>4 clients</strong> signed with around <strong>30 returns per month</strong> and growing! The product was generating revenue, while getting <JdATag href="https://boomreturns.io/news">great press</JdATag>.</p>
        </>
    )
}