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
            <p>Build an app for online-only shoppers to schedule at-home return pickups and an app for drivers to handle pickups.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Google Maps API</li>
                <li>Shopify API</li>
                <li>On screen calendar picker</li>
                <li>Driver features like tap-to-call and route directions</li>
                <li>Homemade virtual router</li>
                <li>Icon design</li>
                <li>Email template design</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>How could we offer <strong>same-day</strong> pickups in our pilot area (Chicago)? A grass-roots approach - our staff would be our drivers for the pilot.</p>


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
            <figcaption className={styles.projectImageCaption}>Screenshots of our whiteboarding discussions</figcaption>

            {/* IDEATION */}
            <p>We laid out the primary user journeys for both the shoppers and the drivers and quickly put together the feature set we wanted to support.</p>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>I created high-fidelity prototypes of the shopper experience for returning items and reviewed internally and with our client.</p>

            {/* PROTOTYPE VIDEO */}
            <JdVimeoPlayer
                src="https://player.vimeo.com/video/841905587?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                className={styles.projectVideo}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Video walkthrough of the prototype</figcaption>

            <p>With a few minor suggestions from our internal staff and client, we were ready to build.</p>

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
            <figcaption className={styles.projectImageCaption}>Prototypes of the end user experience</figcaption>

            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/airshopEmail1.webp?alt=media"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/airshopEmail2.webp?alt=media"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Email template designs</figcaption>

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />

            <p>I met with our backend engineer to layout our db/ui models, api structure, authentication, and notifications. We decided to keep two separate repos: one for front end, one for backend.</p>

            {/* VIDEO */}
            <JdVimeoPlayer
                src="https://player.vimeo.com/video/841311563?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                className={styles.projectVideo}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screen recording of our app right before we shipped to production</figcaption>

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
            <figcaption className={styles.projectImageCaption}>Screenshots of the production web app</figcaption>

            {/* RESULTS */}
            <JdProjectSubHeader {...jdStringUtils.results} />
            <p>28 days later, we shipped our app.</p>
            <p>In the first month, we had <strong>20+ returns</strong> with positive feedback pouring in. Home pickup was a huge hit for end users and it drove brand loyalty and referral marketing for our client.</p>
            <p>The success of this product led us to our <strong>largest round of funding ($1 million)</strong> and would fuel our next big project - scaling this to any Shopify store.</p>

        </>
    )
}