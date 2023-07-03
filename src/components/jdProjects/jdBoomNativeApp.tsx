import { Link } from "react-router-dom";
import jdStringUtils from "../../utils/jdStringUtils";
import { JdImg } from "../jdImg/jdImg";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import styles from './proejctsStyles.module.scss';
import jdProjectStore from "../../stores/jdProjectStore";

export function JdBoomNativeApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Make it easier for consumers to manage all of their returns, while offering home-pickup for all stores and providing retailer benefits like smart return routing.</p>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>There were a handful of some interesting challenges and questions. How could build store integration across so many stores? What type of integration would we need? What were the major problems around the returns experience for shoppers? How could retailers benefit?</p>

            {/* NOTES SCREENSHOT */}
            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativeNotes1.webp?alt=media"
            />
            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativeNotes2.webp?alt=media"
            />
            <JdImg
                className={styles.projectsImage}
                srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativeNotes3.webp?alt=media"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of our whiteboarding discussions.</figcaption>

            <p>We built a list of the top stores to integrate with and found ways to optimize those integration efforts (ex: integrate with a provider that covered many stores).</p>

            <p>The architecture we built for our <Link to={jdProjectStore.getLinkToProject(jdProjectStore.shopifyApp)}>Shopify app</Link> allowed us share code, which helped us get this product built faster but also avoided common problems around "fixing bugs in two places".</p>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>The experience was quite different from our <Link to={jdProjectStore.getLinkToProject(jdProjectStore.shopifyApp)}>Shopify app</Link>S, so I started with a clean slate. We choose a dark mode for various reasons, but planned to add theming later on.</p>

            {/* PROTOTYPE SCREENSHOTS */}
            <div className={styles.multiMedia}>
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativeSs3.webp?alt=media"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativeSs5.webp?alt=media"
                />
                <JdImg
                    className={styles.projectsImage}
                    srcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/boomNativeSs4.webp?alt=media"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of our mobile prototype.</figcaption>

            <p>We studied the top retailer returns experiences and used them for inspiration for our "centralized" return experience. </p>

        </>
    )
}