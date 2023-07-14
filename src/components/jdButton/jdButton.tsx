import { useState } from 'react';
import styles from './buttonStyles.module.scss';
import { JdDotLoader } from '../jdDotLoader/jdDotLoader';
import { AnimatePresence, motion } from 'framer-motion';

export interface IJdButtonProps {
    id: string;
    text: string;
    isDisabled: boolean;
    onClick: () => void | Promise<void>;

    style?: React.CSSProperties;
    className?: string;
}

export function JdButton(props: IJdButtonProps): React.JSX.Element {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const toggleLoader = (newLoadingState: boolean): void => {
        setTimeout(() => {
            setIsLoading(newLoadingState);
        }, isLoading === true ? 0 : 500);
    }

    const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
        e.preventDefault();
        e.stopPropagation();
        console.log('test');
        toggleLoader(true);
        // await props.onClick();
        toggleLoader(false);
    }

    return (
        <button
            id={props.id}
            className={`${styles.buttonContainer} ${props.className}`}
            onClick={async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => await onClick(e)}
            disabled={props.isDisabled}
            style={props.style}
        >
            {props.text}
            {isLoading &&
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={styles.buttonLoader}
                    >
                        <JdDotLoader />
                    </motion.div>
                </AnimatePresence>
            }
        </button>
    )
}