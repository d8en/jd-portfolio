import styles from './projectSubHeaderStyles.module.scss';

export interface IJdProjectSubHeaderProps {
    icon: React.JSX.Element | string;
    name: React.JSX.Element | string;
}

export function JdProjectSubHeader(props: IJdProjectSubHeaderProps): React.JSX.Element {
    return (
        <div className={styles.sectionHeader}>
            <h2 className={styles.sectionIcon}>{props.icon}</h2>
            <h2>{props.name}</h2>
        </div>
    )
}