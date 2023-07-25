import { useEffect, useState } from 'react';
import styles from './jdLoaderBarStyles.module.scss';

export interface IJdLoaderBarProps {
    scrollElementRef: HTMLElement | null;
}

export function JdLoaderBar(props: IJdLoaderBarProps): React.JSX.Element {

    const [scrollAmt, setScrollAmt] = useState<number>(0);

    const handleScroll = (ev: Event): any => {
        console.log('scroll thing', (props.scrollElementRef!.scrollTop + props.scrollElementRef!.clientHeight) / props.scrollElementRef!.scrollHeight);
        setScrollAmt(props.scrollElementRef?.scrollTop ?? 1);
    }


    // Setup scroll handler
    useEffect(() => {
        if (!props.scrollElementRef) return;
        props.scrollElementRef!.onscroll = handleScroll;
    }, [props.scrollElementRef]);

    return (
        <div className={styles.loaderBarContainer}>

            {/* LOADER BAR */}
            <div
                className={styles.loaderBar}
                style={{ width: `${props.scrollElementRef ? ((props.scrollElementRef!.scrollTop + props.scrollElementRef!.clientHeight) / props.scrollElementRef!.scrollHeight) * 100 : 5}%` }}
            />

        </div>
    );
}