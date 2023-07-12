import React, { useState } from 'react';
import styles from './floatingHelpStyles.module.scss';
import { ReactComponent as Close } from '../../assets/svg/icons/close.svg';
import { AnimatePresence, MotionProps, motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';

export function JdFloatingHelp(props: React.PropsWithChildren<MotionProps>): React.JSX.Element {

    // Hide / Show
    const [isShowing, setIsShowing] = useState<boolean>(true);

    const onClickClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        e.preventDefault();
        e.stopPropagation();
        setIsShowing(false);
        console.log('is showing', isShowing);
    }
    return (
        <AnimatePresence>
            {isShowing &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={jdAniUtils.springTransition}
                    className={styles.floatingHelpContainer}
                    {...props}
                >
                    {props.children}
                    <p className={styles.floatingHelpText}>Checkout my projects!</p>

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