import { observer } from "mobx-react-lite";
import { JdProject } from "../../components/jdProject/jdProject";
import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import { IJdProject } from "../../models/iJdProject";
import jdProjectStore from "../../stores/jdProjectStore";
import styles from './projectViewStyles.module.scss';
import { useLocation, Location, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import jdProjectManager from "../../managers/jdProjectManager";

export const JdProjectsView = observer((): React.JSX.Element => {

    // Location hook
    const location: Location = useLocation();

    // Search params
    const [params, setParams] = useSearchParams();

    // Project is clicked on / closed
    const onToggleProject = async (project: IJdProject): Promise<void> => {
        setParams(project.isOpen ? undefined : [[jdProjectManager.store.projectParam, jdProjectManager.store.getParamForProject(project)]]);
    }

    // Location changed, need to open / close projects
    const onLocationChange = (): void => {
        jdProjectManager.closeAllProjects();
        const project: IJdProject | undefined = jdProjectManager.store.getProjectFromParam(params.get(jdProjectManager.store.projectParam));
        if (project) {
            jdProjectManager.toggleOpenProject(project);
        }
        else {
            // jdProjectManager.closeAllProjects();
            setParams(undefined);
        }
    }

    // Effect for location change
    useEffect(() => {
        onLocationChange();
    }, [location.search]);


    // Mount / unmount
    useEffect(() => {
        return () => {
            jdProjectManager.closeAllProjects();
        }
    }, []);

    return (
        <JdViewWrapper>
            <div className={styles.projectViewContainer}>
                {jdProjectStore.projects.map((project: IJdProject) =>
                    <JdProject
                        key={project.id}
                        {...project}
                        onToggleProject={async () => onToggleProject(project)}
                    />

                )}
            </div>
        </JdViewWrapper>
    )
});