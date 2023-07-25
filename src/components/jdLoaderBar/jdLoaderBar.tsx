import styles from './jdLoaderBarStyles.module.scss';

export interface IJdLoaderBarProps {
    amount: number;
    total: number;
}

export function JdLoaderBar(props: IJdLoaderBarProps): React.JSX.Element {
    return (
        <div className={styles.loaderBarContainer}>

            {/* LOADER BAR */}
            <div
                className={styles.loaderBar}
                style={{ width: props.amount / props.total }}
            />

        </div>
    );
}