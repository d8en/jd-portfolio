import { JdViewWrapper } from '../../components/jdViewWrapper/jdViewWrapper';
import styles from './homeStyles.module.scss';
import { motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';
import { useEffect, useState } from 'react';
import { JdAniLogo } from '../../components/jdAniLogo/jdAniLogo';
import { observer } from 'mobx-react-lite';
import { JdDateUtils } from '../../utils/jdDateUtilts';

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
            {/* TITLE */}
            <div className={styles.homeHeader}>
                {/* TITLE / LOGO */}
                <motion.div
                    layout
                    className={styles.homeTitleContainer}
                >
                    <JdAniLogo />

                    {/* TITLE */}
                    {isHeaderShowing && (
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            layout
                            transition={jdAniUtils.longEase}
                        >
                            Jeff Dayton
                        </motion.h1>
                    )}
                </motion.div>

                {/* HEADLINE */}
                {isTaglineShowing && (
                    <motion.h2
                        layout
                        initial={{ bottom: -40, opacity: 0 }}
                        animate={{ position: 'relative', bottom: 0, opacity: 1 }}
                        transition={jdAniUtils.longEase}
                        className={styles.homeSubHeader}
                    >
                        👋&nbsp; <strong>Senior software engineer</strong> and product designer with {JdDateUtils.getYearDiff('2015')} of experience. I take
                        <strong> abstract ideas</strong> and bring them to <strong>life</strong>!
                    </motion.h2>
                )}
            </div>
        </JdViewWrapper>
    );
});
