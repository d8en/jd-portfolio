import { Link } from "react-router-dom";
import jdStringUtils from "../../utils/jdStringUtils";
import { JdATag } from "../jdATag/jdATag";
import { JdImg } from "../jdImg/jdImg";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import styles from './proejctsStyles.module.scss';
import jdProjectStore from "../../stores/jdProjectStore";

export function JdSmartRouteWeb(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Build a website that concicely communicates how a <Link to={jdProjectStore.getLinkToProject(jdProjectStore.boomSmartApp)}>our app</Link> can save a national retailer milliions by optimizing return processing.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>SVG animations</li>
                <li>Building a blog engine</li>
                <li>Hubspot API</li>
                <li>Implementing .webp images</li>
                <li>Optimizing performance using PageSpeed Insights</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>Most of my projects are apps so it was refreshing working on a website.</p>

            <p>I met with our head of marketing to brainstorm, and quickly started to put together a few concepts</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteWebNotes1.webp?alt=media'
                    className={styles.projectsImage}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteWebNotes2.webp?alt=media'
                    className={styles.projectsImage}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshots of our whiteboarding discussions</figcaption>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>I came up with a traditonal concept, inspired by many Saas products out there.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/desktopProto.webp?alt=media'
                    className={styles.projectsImage}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/mobileProto.webp?alt=media'
                    className={styles.projectsImage}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototypes of the first "traditional Saas" layout</figcaption>

            <p>Our CMO had an excellent idea: lets take the user on a "route" through the old ways of doing things, then the new. I loved this idea and created a new concept that we ended up moving forward with.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/desktopProto2.webp?alt=media'
                    className={styles.projectsImage}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/mobileProto2OldWay.webp?alt=media'
                    className={styles.projectsImage}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/mobileProto2NewWay.webp?alt=media'
                    className={styles.projectsImage}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Prototypes of the second layout (old way vs. new way)</figcaption>

            {/* BUILD */}
            <JdProjectSubHeader {...jdStringUtils.build} />
            <p>I had the most fun animating elements when they scrolled into view, includeding the svg lines. Check it out <JdATag href="https://boomreturns.io/">here</JdATag>!</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteOldWay1.webp?alt=media'
                className={styles.projectsImage}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshot of the first section beneath the fold</figcaption>

            <p>For some odd reason, I've always wanted to design and build a blog. The "<JdATag href="https://boomreturns.io/news">news</JdATag>" page was exactly that, just like the page you're currently on!</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteNews.webp?alt=media'
                    className={styles.projectsImage}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteNewsPost.webp?alt=media'
                    className={styles.projectsImage}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshot of the news page and a post</figcaption>


            <p>I also enjoy designing and optimizing the interactions around form inputs. Building the <JdATag href="https://boomreturns.io/#letsTalk">contact form</JdATag> and integrating it to send all messages to Hubspot was a surprisingly fun time.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/smartRouteForm.webp?alt=media'
                className={styles.projectsImage}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshot of the contact form</figcaption>

            {/* RESULTS */}
            <JdProjectSubHeader {...jdStringUtils.results} />
            <p>Within about two weeks, we had designed, iterated, built, and shipped an entire website.</p>


            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/zoneGraphic.webp?alt=media'
                className={styles.projectsImage}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshot of the graphic we created to promote the cost savings around logistics</figcaption>

            <p>We were very quickly ready to market our latest <Link to={jdProjectStore.getLinkToProject(jdProjectStore.boomSmartApp)}>smart routing product</Link> and had a ton of positive feedback coming in from our retail partners and prospects.</p>
        </>
    )
}