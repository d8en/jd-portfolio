import React from 'react';
import styles from './floatingHelpStyles.module.scss';

export function JdFloatingHelp(props: React.PropsWithChildren): React.JSX.Element {
    return (
        <div className={styles.floatingHelpContainer}>
            {props.children}
        </div>
    )
}