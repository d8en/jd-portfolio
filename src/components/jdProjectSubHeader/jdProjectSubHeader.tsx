import styles from './projectSubHeaderStyles.module.scss';

export interface IJdProjectSubHeaderProps {
    icon: React.JSX.Element | string;
    name: React.JSX.Element | string;
}

export function JdProjectSubHeader(props: IJdProjectSubHeaderProps): React.JSX.Element {
    return (
        <div
            className={styles.sectionHeader}
        >
            <p className={styles.sectionIcon}>{props.icon}</p>
            <h2>{props.name}</h2>
        </div>
    )
}