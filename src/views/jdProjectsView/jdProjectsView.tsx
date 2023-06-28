import { JdProject } from "../../components/jdProject/jdProject";
import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import { IJdProject } from "../../models/iJdProject";
import jdProjectStore from "../../stores/jdProjectStore";

export function JdProjectsView(): React.JSX.Element {
    return (
        <JdViewWrapper>
            {jdProjectStore.projects.map((project: IJdProject) => {
                return (
                    <JdProject key={project.title} {...project} />
                )
            })}
        </JdViewWrapper>
    )
}