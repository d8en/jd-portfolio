import { useState } from 'react';
import styles from './buttonStyles.module.scss';
import { JdDotLoader } from '../jdDotLoader/jdDotLoader';
import { AnimatePresence, motion } from 'framer-motion';

export interface IJdButtonProps {
    id: string;
    text: string;
    isDisabled: boolean;
    type: 'submit' | 'reset' | 'button' | undefined;

    onClick?: () => void | Promise<void>;

    isWhiteLoader?: boolean;
    style?: React.CSSProperties;
    className?: string;
    disabledText?: string;
    href?: string;
}

export function JdButton(props: IJdButtonProps): React.JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isTempDisabled, setIsTempDisabled] = useState<boolean>(false);

    const toggleLoader = (newLoadingState: boolean): void => {
        if (newLoadingState) setIsTempDisabled(true);
        setTimeout(
            () => {
                setIsLoading(newLoadingState);
                setIsTempDisabled(false);
            },
            isLoading === true ? 0 : 1000,
        );
    };

    const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
        if (!props.onClick) return;
        e.preventDefault();
        e.stopPropagation();
        toggleLoader(true);
        await props.onClick();
        toggleLoader(false);
    };

    if (props.href) {
        return (
            <a
                href={props.href}
                className={styles.buttonContainer}
            >
                {props.text}
            </a>
        );
    }

    return (
        <button
            type={props.type}
            id={props.id}
            className={`${styles.buttonContainer} ${props.className}`}
            onClick={async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => await onClick(e)}
            onSubmit={async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => await onClick(e)}
            disabled={isTempDisabled || props.isDisabled}
            style={props.style}
        >
            {isTempDisabled ? (props.disabledText ?? props.text) : props.text}
            {isLoading && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={styles.buttonLoader}
                    >
                        <JdDotLoader isWhite={props.isWhiteLoader} />
                    </motion.div>
                </AnimatePresence>
            )}
        </button>
    );
}
