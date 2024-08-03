import { JdViewWrapper } from '../../components/jdViewWrapper/jdViewWrapper';
import jdCompaniesStore from '../../stores/jdCompaniesStore';
import { JdSkillCoList } from '../../components/jdSkillCoList/jdSkillCoList';

export function JdXpView(): React.JSX.Element {
    return (
        <JdViewWrapper>
            <JdSkillCoList list={jdCompaniesStore.companies} />
        </JdViewWrapper>
    );
}
