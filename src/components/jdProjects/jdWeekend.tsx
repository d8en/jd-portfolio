import jdStringUtils from "../../utils/jdStringUtils";
import { JdATag } from "../jdATag/jdATag";
import { JdImg } from "../jdImg/jdImg";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import styles from './proejctsStyles.module.scss';

export function JdWeekend(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Some of these had no goal. That's the beauty of side projects, there's no pressure and only chosen constraints.</p>


            {/* AQI */}
            <h2 className={styles.projectGapReducer}>Air Quality Index Notification</h2>
            <p>I built a <strong>Node.js web service</strong> to periodically check the air quality in my area during the 2023 Canadian wildfires.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/aqi.webp?alt=media'
                className={styles.projectsImage}
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Screenshot of some horrible but working code</figcaption>

            <p>I built this because I was tired of checking the AQI site and wanted to play pickleball that week.</p>

            {/* WATCHFACE */}
            <h2 className={styles.projectGapReducer}>Galaxy Wear Watch Faces</h2>
            <p>I designed and built a <strong>custom watch face</strong>, primarily because of the design / layout challenge but also because I enjoy making icons.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/watch1.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ placeSelf: 'center' }}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/watch2.webp?alt=media'
                    className={styles.projectsImage}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Watch face with the Primacy logo on it</figcaption>

            <p>I started with a design using <JdATag href="https://www.theprimacy.com/">Primacy's logo</JdATag> (agency I was working at), but liked the second concept better.</p>

            <p>I enjoyed making the coffee cup and shoe icons the most.</p>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Watch face with custom icons</figcaption>

            {/* LKL PKL; */}
            <h2 className={styles.projectGapReducer}>LKL PKL - Pickleball Apparel</h2>
            <p>Pickleball became an obsession almost immediately after I started playing in April 2023. I wanted to design a brand to represent all the awesome local pickleball cults..I mean communities.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/lkl3.webp?alt=media'
                className={styles.projectsImage}
            />

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/lkl1.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ placeSelf: 'center' }}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/lkl2.webp?alt=media'
                    className={styles.projectsImage}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>First two t-shirt designs I produced</figcaption>

            <p>I'm also in the process of building a store website that will link to a Shopify store with print-on-demand services hooked up.</p>

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/lklProto6.webp?alt=media'
                    className={styles.projectsImage}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/lklProto5.webp?alt=media'
                    className={styles.projectsImage}
                />
            </div>
            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/lklProto4.webp?alt=media'
                    className={styles.projectsImage}
                    style={{ placeSelf: 'center' }}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/lklProto3.webp?alt=media'
                    className={styles.projectsImage}
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/lklProto2.webp?alt=media'
                    className={styles.projectsImage}
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Designs for the store website</figcaption>

        </>
    )
}