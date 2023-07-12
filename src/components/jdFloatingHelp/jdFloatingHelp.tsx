import React from 'react';
import styles from './floatingHelpStyles.module.scss';

export function JdFloatingHelp(props: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>): React.JSX.Element {
    return (
        <div
            className={styles.floatingHelpContainer}
            {...props}
        >
            {props.children}
            <p className={styles.floatingHelpText}>Checkout my projects!</p>
        </div>
    )
}