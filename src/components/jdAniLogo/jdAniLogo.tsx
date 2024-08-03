import { motion, cubicBezier, MotionProps } from 'framer-motion';
import styles from './aniLogoStyles.module.scss';
import JdLogo from '../../assets/svg/brands/jd.svg?react';

export function JdAniLogo(props: MotionProps): React.JSX.Element {
    return (
        <motion.div
            initial={{
                bottom: -200,
                opacity: 0,
            }}
            transition={{
                ease: cubicBezier(0, 1, 0, 1),
                duration: 1,
            }}
            animate={{
                position: 'relative',
                bottom: 0,
                opacity: 1,
            }}
            className={styles.homeLogoContainer}
            layout
            {...props}
        >
            <JdLogo
                style={{ width: 24, height: 24 }}
                className={styles.homeLogo}
            />
        </motion.div>
    );
}
