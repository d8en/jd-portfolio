import { useEffect, useState } from 'react';
import styles from './viewWrapperStyles.module.scss';
import jdRoutes from '../../utils/jdRoutes';

export interface IJdViewWrapperProps {
    divProps?: React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>;
    removeHeader?: boolean;
}

export function JdViewWrapper(props: React.PropsWithChildren<IJdViewWrapperProps>): JSX.Element {

    // State
    const [title, setTitle] = useState<string>('home');

    // Mount
    useEffect(() => {
        setTitle(jdRoutes.activeRoute.name);
    }, []);

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