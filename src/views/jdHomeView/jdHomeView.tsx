import { JdViewWrapper } from '../../components/jdViewWrapper/jdViewWrapper';
import styles from './homeStyles.module.scss';
import { ReactComponent as JdLogo } from '../../assets/svg/brands/jd.svg';
import { cubicBezier, motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';
import { useEffect, useState } from 'react';

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

            {/* TITLE */}
            <div className={styles.homeHeader}>

                {/* TITLE / LOGO */}
                <motion.div layout className={styles.homeTitle}>

                    {/* LOGO */}
                    <motion.div
                        initial={{ bottom: '-100vh', opacity: 0, scale: 1.2 }}
                        transition={{
                            ease: cubicBezier(0, 1, 0, 1),
                            duration: 1,
                        }}
                        animate={{ position: 'relative', bottom: 0, opacity: 1, scale: 1 }}
                        className={styles.homeLogo}
                        layout
                    >
                        <JdLogo style={{ width: 24, height: 24 }} />
                    </motion.div>

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