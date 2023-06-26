import { useEffect, useState } from 'react';
import styles from './viewWrapperStyles.module.scss';
import jdRoutes from '../../utils/jdRoutes';

export interface IJdViewWrapperProps {
    removeMargin?: boolean;
}

export function JdViewWrapper(props: React.PropsWithChildren & IJdViewWrapperProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element {

    // State
    const [title, setTitle] = useState<string>('home');

    // Mount
    useEffect(() => {
        setTitle(jdRoutes.activeRoute.name);
    }, []);

    return (
        <div
            {...props}
            className={`${styles.viewContainer} ${props.className ? props.className : ''}`}
            style={{ margin: props.removeMargin ? 0 : undefined }}
        >
            {/* TITLE */}
            <h2>{title}</h2>
            {props.children}
        </div>
    )
}