import { useEffect } from 'react';
import styles from './viewWrapperStyles.module.scss';
import jdRoutes from '../../utils/jdRoutes';
import jdStringUtils from '../../utils/jdStringUtils';

export interface IJdViewWrapperProps {
    divProps?: React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>;
}

export function JdViewWrapper(props: React.PropsWithChildren<IJdViewWrapperProps>): JSX.Element {

    useEffect(() => {
        document.title = `${jdStringUtils.pageTitlePrefix}${jdRoutes.activeRoute.name}`;
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