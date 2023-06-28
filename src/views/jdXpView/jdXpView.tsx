import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import { JdXpItem } from "../../components/jdXpItem/jdXpItem";
import styles from './xpViewStyles.module.scss';
import jdCompaniesStore from "../../stores/jdCompaniesStore";
import { IJdCompany } from "../../models/iJdCompany";

export function JdXpView(): React.JSX.Element {
    return (
        <JdViewWrapper divProps={{ className: styles.xpViewContainer }}>

            {jdCompaniesStore.companies.map((company: IJdCompany) => {
                return (
                    <JdXpItem
                        key={company.type}
                        title={company.name}
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