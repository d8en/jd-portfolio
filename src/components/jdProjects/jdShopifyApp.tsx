import { Link } from 'react-router-dom';
import jdStringUtils from '../../utils/jdStringUtils';
import { JdProjectSubHeader } from '../jdProjectSubHeader/jdProjectSubHeader';
import jdProjectStore from '../../stores/jdProjectStore';
import { JdImg } from '../jdImg/jdImg';
import styles from './proejctsStyles.module.scss';

export function JdShoifyApp(): React.JSX.Element {
    return (
        <>
            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Use the lessons we learned from our <Link to={jdProjectStore.getLinkToProject(jdProjectStore.airshopApp)}>Chicago app</Link> and create a multi-tenant scaleable offering for any Shopify store.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Multi-tenant Shopify API</li>
                <li>Address input w/Google Maps API and USPS API</li>
                <li>Currency input (USD)</li>
                <li>CSS Grid for tabular data</li>
                <li>Icon design</li>
                <li>Dot loader using CSS animations</li>
                <li>Theming (client-specified primary and secondary colors)</li>
                <li>Email template design</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>We needed to figure out how we could <strong>scale home pickup</strong> efficiently.</p>

            {/* NOTES SCREENSHOT */}
            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifNotes1.webp?alt=media"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of our whiteboarding discussions.</figcaption>

            <p>Hiring drivers or gig workers in every city/state felt very asset heavy and would liklely take a long time to implement.</p>
            <p>We figured the best economic and even eco-friendly option was to use existing logistics providers (UPS, FedEx, USPS). Each of these providers had APIs that offered package pickup, most of which was affordable for our retail clients.</p>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>We had some excellent shopper feedback from our <Link to={jdProjectStore.getLinkToProject(jdProjectStore.airshopApp)}>first returns app</Link>, so this was a great time to use it.</p>

            <p className={styles.projectGapReducer}>The <strong>requirements</strong> were similar, with a few extra challenges:</p>

            <ul>
                <li>Self-service multi-tenancy</li>
                <li>Different pickup timing constraints from each national carrier</li>
                <li>Theming (brand colors, logo, etc.)</li>
                <li>Pricing customization</li>
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
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifyScreenshot2.webp?alt=media"
                    style={{ boxShadow: 'unset' }}
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifyScreenshot4.webp?alt=media"
                    style={{ boxShadow: 'unset' }}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of the end user prototype for mobile.</figcaption>

            <p>I created new high-fidelity designs from scratch but carried over elements and lessons-learned from the initial app.</p>

            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/shopifyScreenshot1.webp?alt=media"
            />
            <figcaption className={styles.projectImageCaption}>Screenshots of the end user prototype for desktop.</figcaption>
        </>
    )
}