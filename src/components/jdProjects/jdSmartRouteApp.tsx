import jdStringUtils from '../../utils/jdStringUtils';
import { JdImg } from '../jdImg/jdImg';
import { JdProjectSubHeader } from '../jdProjectSubHeader/jdProjectSubHeader';
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

        </>
    )
}