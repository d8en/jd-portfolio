import { JdProject } from "../../components/jdProject/jdProject";
import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import { IJdProject } from "../../models/iJdProject";
import jdProjectStore from "../../stores/jdProjectStore";
import styles from './projectViewStyles.module.scss';

export function JdProjectsView(): React.JSX.Element {
    return (
        <JdViewWrapper>
            <div className={styles.projectViewContainer}>
                {jdProjectStore.projects.map((project: IJdProject) => {
                    return (
                        <JdProject key={project.title} {...project} />
                    )
                })}
            </div>
        </JdViewWrapper>
    )
}