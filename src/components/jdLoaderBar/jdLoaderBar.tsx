import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './jdLoaderBarStyles.module.scss';
import { cubicBezier, motion } from 'framer-motion';

export interface IJdLoaderBarProps {
    scrollElementRef: HTMLElement | null;
}

export function JdLoaderBar(props: IJdLoaderBarProps): React.JSX.Element {
    const [scrollAmt, setScrollAmt] = useState<number>(0);
    const scrollUpdateTimeout = useRef<number | null>(null);

    const handleScroll = (): any => {
        if (scrollUpdateTimeout.current) {
            clearTimeout(scrollUpdateTimeout.current);
            scrollUpdateTimeout.current = null;
        }
        setScrollAmt(props.scrollElementRef?.scrollTop ?? 1);
    };

    useEffect(() => {
        return () => console.log('unmount');
    }, []);

    const scrollWidth: string = useMemo(() => {
        if (!props.scrollElementRef) return '1%';
        return `${((scrollAmt + props.scrollElementRef!.clientHeight) / props.scrollElementRef!.scrollHeight) * 100}%`;
    }, [scrollAmt]);

    // Setup scroll handler
    useEffect(() => {
        if (!props.scrollElementRef) return;
        props.scrollElementRef!.onscroll = handleScroll;
    }, [props.scrollElementRef]);

    return (
        <div className={styles.loaderBarContainer}>
            {/* LOADER BAR */}
            <motion.div
                layout
                transition={{ ease: cubicBezier(0, 1, 0, 1), duration: 4 }}
                className={styles.loaderBar}
                style={{ width: `${scrollWidth}` }}
            />
        </div>
    );
}
