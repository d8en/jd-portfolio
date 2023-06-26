import styles from './viewWrapperStyles.module.scss';

export function JdViewWrapper(props: React.PropsWithChildren): JSX.Element {
    return (
        <div className={styles.viewContainer}>
            {props.children}
        </div>
    )
}