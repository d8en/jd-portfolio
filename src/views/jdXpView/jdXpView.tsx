import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import { JdXpItem } from "../../components/jdXpItem/jdXpItem";
import { ReactComponent as BoomIcon } from '../../assets/svg/brands/boomerang.svg';
import { ReactComponent as RekIcon } from '../../assets/svg/brands/rek.svg';
import styles from './xpViewStyles.module.scss';
import { JdATag } from "../../components/jdATag/jdATag";

export function JdXpView(): React.JSX.Element {
    return (
        <JdViewWrapper divProps={{ className: styles.xpContainer }}>

            {/* BOOMERANG */}
            <JdXpItem
                title="VP, Development & Design"
                icon={<BoomIcon />}
                xp="2 years"
                fillAmt={.75}
            >
                <p>At <JdATag href="https://boomreturns.io/">Boomerang</JdATag>, I built 5 web apps, 1 native mobile app, and 1 promotional site to help secure $1.3 million funding.</p>
                <p>I also designed all web and mobile apps as well as marketing content.</p>
                <p>I Integrated all internal and third party APIs.</p>
                <p>Constructed database architecture alongside backend engineers.</p>
            </JdXpItem>

            {/* BOOMERANG */}
            <JdXpItem
                title="Founder & Full Stack Dev"
                icon={<RekIcon />}
                xp="4 years"
                fillAmt={.75}
            >
                <p>At <JdATag href="https://rekit.app/">Rek</JdATag>, I built 5 web apps, 1 native mobile app, and 1 promotional site to help secure $1.3 million funding.</p>
                <p>I grew the product to 200 users in the first month.</p>
                <p>Used user feedback to manage feature development.</p>
            </JdXpItem>


        </JdViewWrapper>
    )
}