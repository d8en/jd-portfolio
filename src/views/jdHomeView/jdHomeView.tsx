import { JdViewWrapper } from '../../components/jdViewWrapper/jdViewWrapper';
import styles from './homeStyles.module.scss';
import { motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';
import { useEffect, useState } from 'react';
import { JdAniLogo } from '../../components/jdAniLogo/jdAniLogo';
import { JdImg } from '../../components/jdImg/jdImg';

export function JdHomeView(): React.JSX.Element {

    const [isHeaderShowing, setIsHeaderShowing] = useState<boolean>(false);
    const [isTaglineShowing, setIsTaglineShowing] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setIsHeaderShowing(true);
        }, jdAniUtils.logoDelay);

        setTimeout(() => {
            setIsTaglineShowing(true);
        }, jdAniUtils.taglineDelay);
    }, []);

    return (
        <JdViewWrapper divProps={{ className: styles.homeContainer }}>

            {/* BG IMAGE */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: .65 }}
                transition={{ duration: 1, delay: jdAniUtils.mountDelay }}
                className={styles.homeBgContainer}
            >
                <JdImg
                    className={styles.homeBgImg}
                    srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/brandCollageFullscreen.webp?alt=media&token=bd385b6a-8c37-4729-93d6-ccd745c30fc8'
                    style={{ pointerEvents: 'none' }}
                />
            </motion.div>

            {/* TITLE */}
            <div className={styles.homeHeader}>

                {/* TITLE / LOGO */}
                <motion.div layout className={styles.homeTitleContainer}>

                    <JdAniLogo />

                    {/* TITLE */}
                    {isHeaderShowing &&
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            layout
                            transition={jdAniUtils.longEase}
                        >
                            Jeff Dayton
                        </motion.h1>
                    }
                </motion.div>

                {/* HEADLINE */}
                {isTaglineShowing &&
                    <motion.h2
                        layout
                        initial={{ bottom: -40, opacity: 0 }}
                        animate={{ position: 'relative', bottom: 0, opacity: 1 }}
                        transition={jdAniUtils.longEase}
                        className={styles.homeSubHeader}
                    >
                        <strong>Software engineer</strong> and <strong>product designer</strong> with 8 years of experience designing and building products.
                    </motion.h2>
                }
            </div>

        </JdViewWrapper>
    );
}