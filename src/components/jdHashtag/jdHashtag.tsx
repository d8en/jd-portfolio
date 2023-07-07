import styles from './hashtagStyles.module.scss';

export interface IJdHashtagProps {
    name: string;
    onClick: () => void | Promise<void>;
}

export function JdHashtag(props: IJdHashtagProps): React.JSX.Element {

    // const onClick = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //     e.stopPropagation();
    //     e.preventDefault();
    //     await props.onClick()
    // }
    return (
        <div className={styles.hashtagContainer}>
            <p className={styles.hashtagText}>#{props.name}</p>
        </div>
    )
}