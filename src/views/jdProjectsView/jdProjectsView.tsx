import { observer } from "mobx-react-lite";
import { JdProject } from "../../components/jdProject/jdProject";
import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import { IJdProject } from "../../models/iJdProject";
import jdProjectStore from "../../stores/jdProjectStore";
import styles from './projectViewStyles.module.scss';
import { useLocation, Location, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import jdProjectUtils from "../../utils/jdProjectUtils";
import jdProjectManager from "../../managers/jdProjectManager";

export const JdProjectsView = observer((): React.JSX.Element => {

    // Location hook
    const location: Location = useLocation();

    // Search params
    const [params, setParams] = useSearchParams();

    // Project is opened or closed
    const onToggleProject = async (project: IJdProject): Promise<void> => {
        console.log('is project open', project.isOpen);
        setParams(project.isOpen ? undefined : [[jdProjectUtils.projectParam, jdProjectUtils.getProjectSlug(project)]]);
    }

    // Location changed on this page (opening/closing projects)
    useEffect(() => {
        jdProjectManager.findProjectFromSlug(params.get(jdProjectUtils.projectParam));
    }, [location]);

    return (
        <JdViewWrapper>
            <div className={styles.projectViewContainer}>
                {jdProjectStore.projects.map((project: IJdProject) => {
                    return (
                        <JdProject
                            key={project.id}
                            {...project}
                            onToggleProject={async () => onToggleProject(project)}
                        />
                    )
                })}
            </div>
        </JdViewWrapper>
    )
});