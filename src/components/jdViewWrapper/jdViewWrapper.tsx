import styles from './viewWrapperStyles.module.scss';

export function JdViewWrapper(props: React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>): JSX.Element {
    return (
        <div className={styles.viewContainer} {...props}>
            {props.children}
        </div>
    )
}