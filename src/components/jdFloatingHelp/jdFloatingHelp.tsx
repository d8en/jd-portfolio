import React, { useState } from 'react';
import styles from './floatingHelpStyles.module.scss';
import Close from '../../assets/svg/icons/close.svg?react';
import { AnimatePresence, motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';

export interface IJdFloatingHelpProps {
    text: string;
    onClose?: () => void;
    removeDelay?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export function JdFloatingHelp(props: IJdFloatingHelpProps): React.JSX.Element {
    // Hide / Show
    const [isShowing, setIsShowing] = useState<boolean>(true);

    const onClickClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        e.preventDefault();
        e.stopPropagation();
        setIsShowing(false);
        if (props.onClose) props.onClose();
    };

    return (
        <AnimatePresence>
            {isShowing && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ...jdAniUtils.springTransition, delay: props.removeDelay ? 0 : jdAniUtils.mountDelay + 0.5 }}
                    exit={{ opacity: 0, translateX: -40 }}
                    style={props.style}
                    className={`${styles.floatingHelpContainer} ${props.className ?? ''} `}
                    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                        onClickClose(e);
                    }}
                >
                    <p className={styles.floatingHelpText}>{props.text}</p>

                    {/* CLOSE */}
                    <div
                        className={styles.floatingClose}
                        onClick={onClickClose}
                    >
                        <Close style={{ width: 10 }} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
