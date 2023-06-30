import jdStringUtils from "../../utils/jdStringUtils";
import { JdImg } from "../jdImg/jdImg";
import styles from './proejctsStyles.module.scss';

export function JdAirshopApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <h2>{jdStringUtils.goal}</h2>
            <p>Build a web app for retail users to book at-home return pickups and a driver-side app to pickup returns. Users should be able book a pickup same-day and receive notifications along the way.</p>

            {/* FUN FEATURES */}
            <h2>{jdStringUtils.funFeatures}</h2>
            <ul>
                <li>Google Maps API</li>
                <li>Shopify API</li>
                <li>On screen calendar picker</li>
                <li>Driver features like tap-to-call and route directions</li>
                <li>Custom virtual router</li>
            </ul>

            {/* IDEATION */}
            <h2>{jdStringUtils.ideation}</h2>
            <p>The biggest question was "What's the most cost effective path to same-day pickups?"</p>
            <p>The answer was a grass-roots approach - a few members of our staff would be our drivers for the pilot.</p>


            {/* WHITEBOARD */}
            <div className={styles.imgFlex}>
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

            {/* IDEATION */}
            <p>We didn't want to force users into creating user names and passwords so we used the order as a way to <strong>authenticate</strong>:</p>
            <ol>
                <li>User enters their order number.</li>
                <li>We lookup the order using the Shopify API and send an OTP email to the order's email address.</li>
                <li>User enters the OTP and they're in!</li>
            </ol>

            {/* DESIGN */}
            <h2>{jdStringUtils.design}</h2>
            <p>I jumped right into high-fidelity prototypes of the end user experience for returning items first. This was well received by the team, with a few minor suggestions that helped improve its usability.</p>
            <p>We then reviewed with our client, who also only had minor suggestions. We were quickly ready to build.</p>

            {/* PROTOTYPE IMAGES */}
            <div className={styles.imgFlex}>
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

            {/* BUILD */}
            <h2>{jdStringUtils.build}</h2>

            {/* DRIVER IMAGES */}
            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/airshopDriver1.webp?alt=media"
                style={{ boxShadow: 'unset' }}
            />

            <p>On the technical side, we had to keep things super simple since we only had a month to ship. I met with our backend engineer who had a draft of the db model. With just a few minor tweaks, the model was ready.</p>
            <p>Stack:</p>

            <ul>
                <li>React</li>
                <li>C# .NET</li>
                <li>MySQL</li>
            </ul>

            <p>We decided to keep two separate repos: one for front end, one for backend.</p>

        </>
    )
}