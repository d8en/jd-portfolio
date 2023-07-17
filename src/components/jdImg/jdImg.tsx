import { useState } from "react";
import styles from './imgStyles.module.scss';
import { JdClose } from "../jdClose/jdClose";
import { HTMLMotionProps, motion } from "framer-motion";
import jdAniUtils from "../../utils/jdAniUtils";

export function JdImg(props: HTMLMotionProps<"img">): React.JSX.Element {

    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    // Open/close fullscreen
    const onClick = (): void => {
        setIsFullscreen(!isFullscreen);
    }

    return (
        <>
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                onClick={onClick}
                {...props}
            />

            {/* OPENED */}
            {isFullscreen &&
                <div
                    className={styles.fullscreenContainer}
                    onClick={onClick}
                >
                    {/* IMAGE SCALED */}
                    <motion.img
                        {...props}
                        className={`${props.className} ${styles.imageFullscreen}`}
                        style={{ boxShadow: 'unset' }}
                    />

                    {/* CLOSE BTN */}
                    <JdClose
                        onClick={onClick}
                    />
                </div>
            }
        </>
    )
}