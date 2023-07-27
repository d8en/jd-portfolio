import React from "react";
import jdStringUtils from "../../utils/jdStringUtils";
import { JdATag } from "../jdATag/jdATag";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";
import styles from './proejctsStyles.module.scss';
import { JdImg } from "../jdImg/jdImg";

export function JdCtMassBattle(): React.JSX.Element {
    return (
        <>

            {/* PRODUCT */}
            <JdProjectSubHeader {...jdStringUtils.finished} />
            <p>Checkout the <JdATag href="https://www.youtube.com/watch?v=yQDzVleAov4&t=4775s">live stream of the event</JdATag> youtube.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/ctMass1.webp?alt=media'
                className={styles.projectsImage}
                alt="Logo on a mobile device"
            />

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Custom lettering, Connecticut and Massachusetts graphics, and overlays.</figcaption>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Create a brand for a yearly Street Fighter video game tournament with overlays for the event.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Typeface design</li>
                <li>CT + MA skyline designs with Street Fighter characters</li>
                <li>Broadcast overlays</li>
                <li>Animated graphic for transitions</li>
            </ul>

            {/* DESIGN */}
            <JdProjectSubHeader {...jdStringUtils.design} />
            <p>I wanted to incorporate the states, their major cities, and the Street Fighter characters all in one graphic. This came together nicely and the client was super happy with the idea.</p>

            <JdImg
                srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/ctMass4.gif?alt=media'
                className={styles.projectsImage}
                alt="Logo on a mobile device"
            />

            <div className={styles.multiMedia}>
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/ctMass3.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Logo on a mobile device"
                />
                <JdImg
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/ctMass2.webp?alt=media'
                    className={styles.projectsImage}
                    alt="Logo on a mobile device"
                />
            </div>

            {/* CAPTION */}
            <figcaption className={styles.projectImageCaption}>Custom lettering, Connecticut and Massachusetts graphics, and overlays.</figcaption>

            <p>I designed an animated graphic for scene transitions, with arrows signifying real 'combos' from the game.</p>

        </>
    )
}