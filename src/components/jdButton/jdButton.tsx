import { useState } from 'react';
import styles from './buttonStyles.module.scss';
import { JdDotLoader } from '../jdDotLoader/jdDotLoader';
import { AnimatePresence, motion } from 'framer-motion';

export interface IJdButtonProps {
    id: string;
    text: string;
    isDisabled: boolean;
    onClick: () => void | Promise<void>;
    type: 'submit' | 'reset' | 'button' | undefined;
    isWhiteLoader?: boolean;

    style?: React.CSSProperties;
    className?: string;
}

export function JdButton(props: IJdButtonProps): React.JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isTempDisabled, setIsTempDisabled] = useState<boolean>(false);

    const toggleLoader = (newLoadingState: boolean): void => {
        if (newLoadingState) setIsTempDisabled(true);
        setTimeout(
            () => {
                setIsLoading(newLoadingState);
                if (isTempDisabled) setIsTempDisabled(false);
            },
            isLoading === true ? 0 : 800,
        );
    };

    const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
        e.preventDefault();
        e.stopPropagation();
        toggleLoader(true);
        await props.onClick();
        toggleLoader(false);
    };

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
            {props.text}
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
