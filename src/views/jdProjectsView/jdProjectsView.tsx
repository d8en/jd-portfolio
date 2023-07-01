import { observer } from "mobx-react-lite";
import { JdProject } from "../../components/jdProject/jdProject";
import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import jdProjectManager from "../../managers/jdProjectManager";
import { IJdProject } from "../../models/iJdProject";
import jdProjectStore from "../../stores/jdProjectStore";
import styles from './projectViewStyles.module.scss';

export const JdProjectsView = observer((): React.JSX.Element => {
    return (
        <JdViewWrapper>
            <div className={styles.projectViewContainer}>
                {jdProjectStore.projects.map((project: IJdProject) => {
                    return (
                        <JdProject
                            key={project.title}
                            {...project}
                            onToggleProject={async () => await jdProjectManager.toggleOpenProject(project)}
                        />
                    )
                })}
            </div>
        </JdViewWrapper>
    )
});