import { motion } from "framer-motion";
import { JdAniLogo } from "../../components/jdAniLogo/jdAniLogo";
import { JdNav } from "../../components/jdNav/jdNav";
import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import styles from './errorViewStyles.module.scss';
import jdAniUtils from "../../utils/jdAniUtils";
import { useEffect, useState } from "react";
import jdThemeManager from "../../managers/jdThemeManager";

export function JdErrorView(): React.JSX.Element {

    const [isTextShowing, setIsTextShowing] = useState<boolean>(false);

    useEffect(() => {
        jdThemeManager.setTheme();
        setTimeout(() => {
            setIsTextShowing(true);
        }, 800);
    }, []);

    return (
        <>
            <JdViewWrapper divProps={{ className: styles.errorContainer }}>

                <div className={styles.errorContent}>

                    {/* LOGO */}
                    <JdAniLogo />

                    {/* TEXT */}
                    {isTextShowing &&
                        <motion.div
                            className={styles.errorText}
                            {...jdAniUtils.aniElementMount()}
                        >
                            <h1>Whoopsie Daisy!</h1>
                            <p><strong>Tap a link below</strong> to get back on the road!</p>
                        </motion.div>
                    }

                </div>

            </JdViewWrapper>

            {/* NAV BAR */}
            <JdNav />
        </>
    )
}