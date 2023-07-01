import { observer } from "mobx-react-lite";
import { JdProject } from "../../components/jdProject/jdProject";
import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import jdProjectManager from "../../managers/jdProjectManager";
import { IJdProject } from "../../models/iJdProject";
import jdProjectStore from "../../stores/jdProjectStore";
import styles from './projectViewStyles.module.scss';
import { useLocation, Location, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import jdProjectUtils from "../../utils/jdProjectUtils";

export const JdProjectsView = observer((): React.JSX.Element => {

    // Location hook
    const location: Location = useLocation();

    // Search params
    const [params, setParams] = useSearchParams();

    // Project is opened or closed
    const onToggleProject = async (project: IJdProject): Promise<void> => {
        setParams([[jdProjectUtils.projectParam, jdProjectUtils.getProjectSlug(project)]]);
        await jdProjectManager.toggleOpenProject(project);
    }

    // Location changed on this page (opening/closing projects)
    useEffect(() => {
    }, [location]);

    return (
        <JdViewWrapper>
            <div className={styles.projectViewContainer}>
                {jdProjectStore.projects.map((project: IJdProject) => {
                    return (
                        <JdProject
                            key={project.title}
                            {...project}
                            onToggleProject={async () => onToggleProject(project)}
                        />
                    )
                })}
            </div>
        </JdViewWrapper>
    )
});