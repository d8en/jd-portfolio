import { IJdProject } from '../../models/iJdProject';
import { JdImg } from '../jdImg/jdImg';
import styles from './projectStyles.module.scss';

export function JdProject(props: IJdProject): React.JSX.Element {
    return (
        <div className={styles.projectsContainer}>

            {/* PREVIEW IMAGE */}
            <JdImg
                srcSet={props.image}
                className={styles.projectPreviewImg}
            />

            {/* CONTENT */}
            <div className={styles.projectContent}>

                {/* TITLE */}
                <h2 className={styles.projectHeader}>{props.title}</h2>

                {/* DESCRIPTION */}
                <p className={styles.projectDesc}>{props.desc}</p>

            </div>
        </div>
    )
}