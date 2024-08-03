import { JdViewWrapper } from '../../components/jdViewWrapper/jdViewWrapper';
import jdSkillsStore from '../../stores/jdSkillsStore';
import { JdSkillCoList } from '../../components/jdSkillCoList/jdSkillCoList';

export function JdSkillsView(): React.JSX.Element {
    return (
        <JdViewWrapper>
            <JdSkillCoList list={jdSkillsStore.skills} />
        </JdViewWrapper>
    );
}
