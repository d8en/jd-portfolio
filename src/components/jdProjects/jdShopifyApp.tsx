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
            {/* PRODUCT */}
            <JdProjectSubHeader {...jdStringUtils.finished} />
            <p>Below is a demo of the app I designed and built for shoppers to return items and book home pickups.</p>

            {/* SHOPIFY APP WALKTHROUGH */}
            <JdVimeoPlayer
                src="https://player.vimeo.com/video/841934938?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                className={styles.projectVideo}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Walkthrough of our Shopify app, with an embarrassing narration done by yours truly</figcaption>

            <p>I also designed and built the admin app for shop owners to manage app settings and returns, including integration with Shopify for submitting refunds.</p>

            {/* SHOPIFY ADMIN WALKTHROUGH */}
            <JdVimeoPlayer
                src="https://player.vimeo.com/video/841945316?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                style={{ width: '100%' }}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Walkthrough of our admin experience for Shopify store owners</figcaption>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>
                Use the lessons learned from our <Link to={jdProjectStore.getLinkToProject(jdProjectStore.airshopApp)}>pilot app</Link> and create a multi-tenant scalable offering for the Shopify
                ecosystem.
            </p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Address input (Google Maps API and USPS API)</li>
                <li>Currency input (USD)</li>
                <li>CSS Grid for tabular data</li>
                <li>Theming (client-specified colors and branding)</li>
                <li>Email template design</li>
                <li>Icon design</li>
                <li>Multi-tenancy</li>
                <li>Dot loader using CSS animations</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>
                We needed to figure out how we could <strong>scale home pickup</strong>.
            </p>

            {/* NOTES SCREENSHOT */}
            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifNotes1.webp?alt=media"
                alt="Sticky notes documenting a user flow"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of our whiteboarding discussions</figcaption>

            <p>Creating a widespread network of drivers and vehicles in every city/state would be time-consuming and difficult to scale.</p>
            <p>
                The best economic and eco-friendly option was to use existing logistics providers (UPS, FedEx, USPS). Each of these providers had APIs that offered pickup, most of which were
                affordable.
            </p>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>
                We had some excellent shopper feedback from our <Link to={jdProjectStore.getLinkToProject(jdProjectStore.airshopApp)}>first returns app</Link>, so we used that to improve interactions,
                verbiage, code architecture, and overall design.
            </p>

            <p className={styles.projectGapReducer}>
                The <strong>requirements</strong> were similar, with a few extra challenges:
            </p>

            <ul>
                <li>Self-service client onboarding</li>
                <li>No pickup windows</li>
                <li>Theming (brand colors, logo, etc.)</li>
                <li>Pricing customization</li>
                <li>Package tracking</li>
                <li>Custom return reasons</li>
                <li>Automated refunds</li>
            </ul>

            {/* SCREENSHOT */}
            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifyScreenshot3.webp?alt=media"
                    style={{ boxShadow: 'unset' }}
                    alt="Prototype of the mobile shopper experience"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifyScreenshot4.webp?alt=media"
                    style={{ boxShadow: 'unset' }}
                    alt="Prototype of the mobile shopper experience"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifyScreenshot2.webp?alt=media"
                    style={{ boxShadow: 'unset' }}
                    alt="Prototype of the mobile shopper experience"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of the end user prototype for mobile</figcaption>

            <p>I created new high-fidelity designs from scratch but carried some elements over from the initial app.</p>

            {/* END USER PROTOTYPES */}
            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifyScreenshot1.webp?alt=media"
                alt="Prototype of the desktop shopper experience"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of the end user prototype for desktop</figcaption>

            {/* ADMIN PROTOTYPE */}
            <p>In addition to the shopper experience, I also designed an app for Shopify admins. This would be used to manage returns processing.</p>

            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifyScreenshot5.webp?alt=media"
                alt="Prototype of the retailer dashboard"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of the admin prototype for desktop</figcaption>

            <p>
                I've always enjoyed <strong>icon design</strong> so I took some extra time on this project to build our own set.
            </p>

            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/iconDesign.webp?alt=media"
                alt="Icons I designed"
            />

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />
            <p>
                We built a <strong>monorepo</strong> using Typescript project references, primarily so that we could share DTOs but also to share state management classes/methods across our apps.
            </p>

            {/* SHOPIFY APP WALKTHROUGH */}
            <JdVimeoPlayer
                src="https://player.vimeo.com/video/841934938?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                className={styles.projectVideo}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Walkthrough of our Shopify app, with an embarrassing narration done by yours truly</figcaption>

            <p className={styles.projectGapReducer}>This was our general repo structure, excluding some base utility projects / scaffolding:</p>

            <ul>
                <li>Base Project</li>
                <ul style={{ margin: 0 }}>
                    <li>Node (state management)</li>
                    <li>React (state management)</li>
                    <li>Models (DB and DTO)</li>
                </ul>
                <li>Authentication</li>
                <li>End User React App</li>
                <li>Admin React App</li>
                <li>Node API</li>
                <li>Carrier Integration</li>
            </ul>

            <p>
                We shared code across our Shopify admin and shopper experiences, and eventually our <Link to={jdProjectStore.getLinkToProject(jdProjectStore.boomNativeApp)}>native mobile app</Link>.
            </p>

            {/* SHOPIFY ADMIN WALKTHROUGH */}
            <JdVimeoPlayer
                src="https://player.vimeo.com/video/841945316?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                style={{ width: '100%' }}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Walkthrough of our admin experience for Shopify store owners</figcaption>

            {/* RESULTS */}
            <JdProjectSubHeader {...jdStringUtils.results} />
            <p>About a month and a half later, we shipped our Shopify app.</p>
            <p>
                Our marketing team had <strong>3 beta clients</strong> lined up so I demoed the app and onboarded them the following week.
            </p>

            {/* SHOPIFY APP WALKTHROUGH */}
            <JdVimeoPlayer
                src="https://player.vimeo.com/video/841937403?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                className={styles.projectVideo}
            />
            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Video walkthrough of the Shopify app from our first client</figcaption>

            <p>
                Two months later, we had <strong>4 clients</strong> signed with around <strong>30 returns per month</strong> and growing! The product was generating revenue, while getting{' '}
                <JdATag href="https://boomreturns.io/news">great press</JdATag>.
            </p>
        </>
    );
}
