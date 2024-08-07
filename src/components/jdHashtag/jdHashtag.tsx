import styles from './hashtagStyles.module.scss';

export interface IJdHashtagProps {
    name: string;
    onClick: () => void | Promise<void>;
}

export function JdHashtag(props: IJdHashtagProps): React.JSX.Element {
    return (
        <div className={styles.hashtagContainer}>
            <p className={styles.hashtagText}>#{props.name}</p>
        </div>
    );
}
