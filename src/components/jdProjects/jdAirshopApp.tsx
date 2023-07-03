import jdStringUtils from "../../utils/jdStringUtils";
import { JdImg } from "../jdImg/jdImg";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import { JdVimeoPlayer } from "../jdVimeoPlayer/jdVimeoPlayer";
import styles from './proejctsStyles.module.scss';

export function JdAirshopApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Build two apps: one for shoppers to schedule at-home return pickups and one for drivers to handle pickups. Shoppers should be able book a same-day pickups and receive timely notifications along the way.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.funStuff} />
            <ul>
                <li>Google Maps API</li>
                <li>Shopify API</li>
                <li>On screen calendar picker</li>
                <li>Driver features like tap-to-call and route directions</li>
                <li>Custom virtual router</li>
                <li>Custom icon design</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>The biggest question was "<strong>What's the most cost effective path to same-day pickups?</strong>"</p>
            <p>The answer was a grass-roots approach - a few members of our staff would be our drivers for the pilot.</p>


            {/* WHITEBOARD */}
            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/chicagoNotes3.webp?alt=media"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/chicagoNotes1.webp?alt=media"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/chicagoNotes2.webp?alt=media"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of our whiteboarding discussions.</figcaption>

            {/* IDEATION */}
            <p>We had a brainstorming session where we talked through user journies and app features, focusing on coummunication with the user and timely picups.</p>

            <p className={styles.projectGapReducer}>We needed simple <strong>authentication</strong>, avoiding the need for another username and password so we created a passwordless flow:</p>
            <ol>
                <li>Shoppers enters their order number</li>
                <li>We lookup the order using the Shopify API</li>
                <li>We send an OTP (one-time passcode) to the email associated with the order</li>
                <li>User enters the OTP in our app</li>
                <li>Keep them authenticated using a JWT</li>
            </ol>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>I created high-fidelity prototypes of the shopper experience for returning items and reviewed internally and with our client. </p>

            {/* PROTOTYPE IMAGES */}
            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/chicagoSS3.webp?alt=media"
                    style={{ boxShadow: 'unset' }}
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/chicagoSS2.webp?alt=media"
                    style={{ boxShadow: 'unset' }}
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/chicagoSS1.webp?alt=media"
                    style={{ boxShadow: 'unset' }}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototypes of the end user experience.</figcaption>

            {/* DESIGN */}
            <p>With a few minor suggestions from our internal staff and client, we were ready to build.</p>

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />

            <p>On the technical side, we had to keep things super simple since we only had a month to ship. I met with our backend engineer who had a draft of the db model. With just a few minor tweaks, the model was ready.</p>

            {/* VIDEO */}
            <JdVimeoPlayer
                src="https://player.vimeo.com/video/841311563?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                style={{ height: 600, placeSelf: 'center' }}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screen recording of our app right before we shipped to production.</figcaption>

            <p>We decided to keep two separate repos: one for front end, one for backend.</p>


            <div className={styles.multiMedia}>
                {/* DRIVER IMAGE */}
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/airshopDriver1.webp?alt=media"
                    style={{ boxShadow: 'unset' }}
                />

                {/* HELP SCREEN */}
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/airshopHelp.webp?alt=media"
                    style={{ boxShadow: 'unset' }}
                />

                {/* CALENDAR */}
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/airshopCalendar.webp?alt=media"
                    style={{ boxShadow: 'unset' }}
                />

            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of the production web app.</figcaption>

            {/* RESULTS */}
            <JdProjectSubHeader {...jdStringUtils.results} />
            <p>A month after conception, we pushed our app to production.</p>
            <p>Within the first month, we had 20+ returns with positive feedback pouring in. It was clear that return pickup was valuable for our end users, which drove brand loyalty and referral marketing for our client.</p>
            <p>The success of this product led us to our largest round of funding ($1 million) and would fuel our next big project - scaling this to any Shopify store.</p>

        </>
    )
}