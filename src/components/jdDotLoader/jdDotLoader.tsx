import styles from './dotLoaderStyles.module.scss';

export interface IJdDotLoaderProps {
    isWhite?: boolean;
}

export function JdDotLoader(props: IJdDotLoaderProps): React.JSX.Element {
    return (
        <div className={styles.dotLoaderContent}>
            <div className={`${styles.dotLoading} ${props.isWhite ? styles.dotLoadingWhite : ''}`} />
            <div className={`${styles.dotLoading} ${props.isWhite ? styles.dotLoadingWhite : ''}`} />
            <div className={`${styles.dotLoading} ${props.isWhite ? styles.dotLoadingWhite : ''}`} />
        </div>
    );
}