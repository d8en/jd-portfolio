import { motion, cubicBezier } from "framer-motion";
import styles from './aniLogoStyles.module.scss';
import { ReactComponent as JdLogo } from '../../assets/svg/brands/jd.svg';

export function JdAniLogo(): React.JSX.Element {
    return (
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
    )
}