import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import { JdXpItem } from "../../components/jdXpItem/jdXpItem";
import styles from './xpViewStyles.module.scss';
import jdCompaniesStore from "../../stores/jdCompaniesStore";
import { IJdSkillCo } from "../../models/iJdSkillCo";

export function JdXpView(): React.JSX.Element {
    return (
        <JdViewWrapper divProps={{ className: styles.xpViewContainer }}>
            {jdCompaniesStore.companies.map((company: IJdSkillCo, idx: number) => {
                return (
                    <JdXpItem
                        idx={idx}
                        key={company.name}
                        name={company.name}
                        imgSrc={company.imgSrc}
                        icon={company.icon}
                        xp={company.xp}
                        xpPercentage={company.xpPercentage}
                    >
                        {company.component}
                    </JdXpItem>
                )
            })}
        </JdViewWrapper>
    )
}