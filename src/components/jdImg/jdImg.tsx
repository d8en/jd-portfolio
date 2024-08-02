import { useState } from 'react';
import styles from './imgStyles.module.scss';
import { JdClose } from '../jdClose/jdClose';
import { HTMLMotionProps, motion } from 'framer-motion';

export function JdImg(props: HTMLMotionProps<'img'> & { alt: string }): React.JSX.Element {
    // State
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Open/close fullscreen
    const onClick = (): void => {
        setIsFullscreen(!isFullscreen);
    };

    return (
        <>
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                onClick={onClick}
                onLoad={() => setIsLoading(false)}
                {...props}
                alt={isLoading ? undefined : props.alt}
            />

            {/* OPENED */}
            {isFullscreen && (
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
                    <JdClose onClick={onClick} />
                </div>
            )}
        </>
    );
}
