import { motion } from "framer-motion";
import { JdAniLogo } from "../../components/jdAniLogo/jdAniLogo";
import { JdNav } from "../../components/jdNav/jdNav";
import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import styles from './errorViewStyles.module.scss';
import jdAniUtils from "../../utils/jdAniUtils";
import { useEffect, useState } from "react";

export function JdErrorView(): React.JSX.Element {

    const [isTextShowing, setIsTextShowing] = useState<boolean>(false);

    useEffect(() => {
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
                            {...jdAniUtils.getMoveUp()}
                        >
                            <h1>Whoopsie Daisy!</h1>
                            <p>Looks like the page you're tryin' to get to doesn't exist...</p>
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