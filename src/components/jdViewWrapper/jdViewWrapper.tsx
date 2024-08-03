import { useEffect, useRef } from 'react';
import styles from './viewWrapperStyles.module.scss';
import jdRoutes from '../../utils/jdRoutes';
import jdStringUtils from '../../utils/jdStringUtils';
import jdElementUtils from '../../utils/jdElementUtils';

export interface IJdViewWrapperProps {
    divProps?: React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>;
}

export function JdViewWrapper(props: React.PropsWithChildren<IJdViewWrapperProps>): JSX.Element {
    // Scroll view ref
    const divRef = useRef<HTMLDivElement | null>(null);

    // Mount
    useEffect(() => {
        document.title = `${jdStringUtils.pageTitlePrefix}${jdRoutes.activeRoute.name}`;
        if (divRef.current) jdElementUtils.resetScrollTop(divRef.current);
    }, []);

    return (
        <div
            ref={divRef}
            {...props.divProps}
            className={`${styles.viewContent} ${props.divProps?.className ? props.divProps.className : ''}`}
        >
            {/* CHILDREN */}
            {props.children}
        </div>
    );
}
