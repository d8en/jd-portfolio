import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import { JdXpItem } from "../../components/jdXpItem/jdXpItem";
import { ReactComponent as BoomIcon } from '../../assets/svg/brands/boomerang.svg';
import styles from './xpViewStyles.module.scss';
import { JdATag } from "../../components/jdATag/jdATag";

export function JdXpView(): React.JSX.Element {
    return (
        <JdViewWrapper divProps={{ className: styles.xpContainer }}>
            <JdXpItem
                title="Boomerang Returns"
                icon={<BoomIcon />}
                xp="4 years"
                fillAmt={1}
            >
                <p>At <JdATag href="https://boomreturns.io/">Boomerang</JdATag>, I built 5 web apps, 1 native mobile app, and 1 promotional site to help secure $1.3 million funding.</p>
                <p>I also designed all web and mobile apps as well as marketing content.</p>
                <p>I Integrated all internal and third party APIs.</p>
                <p>Constructed database architecture alongside backend engineers.</p>
            </JdXpItem>
        </JdViewWrapper>
    )
}