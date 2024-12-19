import jdStringUtils from '../../utils/jdStringUtils';
import { JdImg } from '../jdImg/jdImg';
import { JdProjectSubHeader } from '../jdProjectSubHeader/jdProjectSubHeader';
import styles from './proejctsStyles.module.scss';

export function JdAqiService(): React.JSX.Element {
    return (
        <>
            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Send notifications if the air quality index changes in a specified area.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Reverse engineering api calls from airnow.gov</li>
                <li>Sendgrid API integration (sms and email alerts)</li>
                <li>CI/CD to automate web service deployment</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>The first step was identifying the API call that contains the AQI measurements I needed.</p>

            <JdImg
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/aqi1.webp?alt=media"
                className={styles.projectsImage}
                alt="Network calls made on airnow.gov"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshot of network call inspection (request)</figcaption>

            <p>After that, I just needed to understand the shape of the request and response in order to build some type safety around it in my web service.</p>

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />
            <p>After writing some relatively simple methods to retrieve the AQI, I quickly read up on the SendGrid API so that I could send email/SMS alerts.</p>

            <JdImg
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/aqi2.webp?alt=media"
                className={styles.projectsImage}
                alt="Network calls made on airnow.gov"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshot of network call inspection (response)</figcaption>

            <p>I didn't see any evidence of any webhooks on airnow.gov, so I setup my service to run at a specified interval.</p>

            <p>
                One interesting finding (seems obvious to me now) was that serverless web services can't "stay alive" for polling activities like this. They have built in timeouts that kill services
                after a specified interval. For this web service, I would need a more traditional instance that can stay alive.
            </p>
        </>
    );
}
