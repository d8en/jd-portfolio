import styles from './dotLoaderStyles.module.scss';

export function JdDotLoader(props: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element {
    return (
        <div
            className={`${styles.dotLoaderContainer} ${props.className}`}
            {...props}
        >

            <div className={styles.dotLoaderContent}>
                <div className={styles.dotLoading} />
                <div className={styles.dotLoading} />
                <div className={styles.dotLoading} />
            </div>

        </div>
    );
}