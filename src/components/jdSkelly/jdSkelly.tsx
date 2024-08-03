import styles from './skellyStyles.module.scss';

export function JdSkelly(props: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element {
    return (
        <div
            {...props}
            className={`${styles.skellyContainer} ${props.className}`}
        />
    );
}
