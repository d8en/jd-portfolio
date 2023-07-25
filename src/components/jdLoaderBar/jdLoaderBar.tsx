import { useState } from 'react';
import styles from './jdLoaderBarStyles.module.scss';

export interface IJdLoaderBarProps {
    scrollElementRef: HTMLElement | null;
}

export function JdLoaderBar(props: IJdLoaderBarProps): React.JSX.Element {

    const [scrollAmt, setScrollAmt] = useState<number>(0);

    console.log('scroll thing', props.scrollElementRef?.onscroll);

    return (
        <div className={styles.loaderBarContainer}>

            {/* LOADER BAR */}
            <div
                className={styles.loaderBar}
                style={{ width: `${scrollAmt / (props.scrollElementRef ? props.scrollElementRef.scrollHeight : 1)}%` }}
            />

        </div>
    );
}