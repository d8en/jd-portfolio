import { observer } from 'mobx-react-lite';
import styles from './contactFormStyles.module.scss';
import jdContactManager from '../../managers/jdContactManager';
import { AnimatePresence, motion } from 'framer-motion';
import jdAniUtils from '../../utils/jdAniUtils';
import { JdClose } from '../jdClose/jdClose';
import { useEffect, useRef, useState } from 'react';
import { JdButton } from '../jdButton/jdButton';

export const JdContactForm = observer(() => {
    // Effect for showing contact form
    useEffect(() => {
        if (jdContactManager.store.isFloatingShowing) jdContactManager.setStateAsync({ hasFloatShown: true });
    }, [jdContactManager.store.isOpen]);

    const startingText: string = 'Copy my email!';
    const [buttonTxt, setButtonTxt] = useState<string>(startingText);
    const timeoutBtnText = useRef<Timer>();

    const onCopy = async (): Promise<void> => {
        try {
            await navigator.clipboard.writeText('hello@rekit.app');
        } catch (error) {
            setButtonTxt('Copy not allowed ☹!');
            return;
        }
        if (timeoutBtnText.current) clearTimeout(timeoutBtnText.current);
        setButtonTxt('Copied!');
        timeoutBtnText.current = setTimeout(() => {
            setButtonTxt(startingText);
        }, 2400);
    };

    return (
        <AnimatePresence>
            {jdContactManager.store.isOpen && (
                <motion.div
                    exit={{ translateY: 40, opacity: 0, transition: jdAniUtils.baseEaseOut }}
                    {...jdAniUtils.aniElementMount()}
                    className={styles.contactFormContainer}
                >
                    {/* CLOSE */}
                    <JdClose
                        onClick={() => jdContactManager.setStateAsync({ isOpen: false })}
                        isBottom
                    />

                    <div className={styles.contactContent}>
                        {/* HEADLINE */}
                        <h1>👋 Hello!</h1>
                        <p>
                            I'm <strong>happily employed</strong> at the moment...
                        </p>
                        <p>...but if you have some interesting side projects or app ideas, feel free to email me!</p>
                        <JdButton
                            id={'email'}
                            text={buttonTxt}
                            isDisabled={false}
                            onClick={onCopy}
                            type="button"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
});
