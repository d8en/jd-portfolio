import styles from './dotLoaderStyles.module.scss';

export function JdDotLoader(): React.JSX.Element {
    return (
        <div className={styles.dotLoaderContent}>
            <div className={styles.dotLoading} />
            <div className={styles.dotLoading} />
            <div className={styles.dotLoading} />
        </div>
    );
}