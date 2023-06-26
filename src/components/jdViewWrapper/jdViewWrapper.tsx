import styles from './viewWrapperStyles.module.scss';

export interface IJdViewWrapperProps {
    removeMargin?: boolean;
}

export function JdViewWrapper(props: React.PropsWithChildren & IJdViewWrapperProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element {
    return (
        <div
            {...props}
            className={`${styles.viewContainer} ${props.className ? props.className : ''}`}
            style={{ margin: props.removeMargin ? 0 : undefined }}
        >
            {props.children}
        </div>
    )
}