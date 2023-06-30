import styles from './viewWrapperStyles.module.scss';

export interface IJdViewWrapperProps {
    divProps?: React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>;
    removeHeader?: boolean;
}

export function JdViewWrapper(props: React.PropsWithChildren<IJdViewWrapperProps>): JSX.Element {
    return (
        <div
            {...props.divProps}
            className={`${styles.viewContent} ${props.divProps?.className ? props.divProps.className : ''}`}
        >
            {/* CHILDREN */}
            {props.children}
        </div>
    )
}