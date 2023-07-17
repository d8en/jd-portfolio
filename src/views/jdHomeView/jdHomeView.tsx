import { JdViewWrapper } from '../../components/jdViewWrapper/jdViewWrapper';
import styles from './homeStyles.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';
import { useEffect, useState } from 'react';
import { JdAniLogo } from '../../components/jdAniLogo/jdAniLogo';
import { JdImg } from '../../components/jdImg/jdImg';
import jdThemeManager from '../../managers/jdThemeManager';
import { observer } from 'mobx-react-lite';

export const JdHomeView = observer((): React.JSX.Element => {

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
            <div
                className={styles.homeBgContainer}
                style={{
                    opacity: jdThemeManager.store.isDarkTheme ? .02 : .5,
                }}
            >
                <AnimatePresence>
                    {isTaglineShowing &&
                        <JdImg
                            className={styles.homeBgImg}
                            srcSet='https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/brandCollageFullscreen.webp?alt=media&token=bd385b6a-8c37-4729-93d6-ccd745c30fc8'
                            style={{ pointerEvents: 'none' }}
                        />
                    }
                </AnimatePresence>
            </div>

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
                        Software engineer and product designer with 8 years of experience designing and building products.
                    </motion.h2>
                }
            </div>

        </JdViewWrapper>
    );
});