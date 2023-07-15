import React, { useState } from 'react';
import styles from './floatingHelpStyles.module.scss';
import { ReactComponent as Close } from '../../assets/svg/icons/close.svg';
import { AnimatePresence, MotionProps, motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';

export interface IJdFloatingHelpProps {
    text: string;
    onClose?: () => void;
}

export function JdFloatingHelp(props: MotionProps & IJdFloatingHelpProps): React.JSX.Element {

    // Hide / Show
    const [isShowing, setIsShowing] = useState<boolean>(true);

    const onClickClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        e.preventDefault();
        e.stopPropagation();
        setIsShowing(false);
        if (props.onClose) props.onClose();
    }
    return (
        <AnimatePresence>
            {isShowing &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ...jdAniUtils.springTransition, delay: jdAniUtils.mountDelay + .5 }}
                    className={styles.floatingHelpContainer}
                    {...props}
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
            }
        </AnimatePresence>
    )
}