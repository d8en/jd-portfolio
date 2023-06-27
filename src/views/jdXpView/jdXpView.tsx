import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import { JdXpItem } from "../../components/jdXpItem/jdXpItem";
import { ReactComponent as BoomIcon } from '../../assets/svg/brands/boomerang.svg';
import { ReactComponent as RekIcon } from '../../assets/svg/brands/rek.svg';
import { ReactComponent as GravixIcon } from '../../assets/svg/brands/gravix.svg';
import styles from './xpViewStyles.module.scss';
import { JdATag } from "../../components/jdATag/jdATag";

export function JdXpView(): React.JSX.Element {
    return (
        <JdViewWrapper divProps={{ className: styles.xpViewContainer }}>

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

            {/* REK */}
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

            {/* PRIMACY */}
            <JdXpItem
                title="Product Designer"
                imgSrcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/primacy.webp?alt=media&token=b546bf34-6398-40db-ac44-87e710579c0c"
                xp="2 years"
                fillAmt={.75}
            >
                <p>At <JdATag href="https://www.theprimacy.com/">Primacy</JdATag>, I was the sole designer on a $1.5 million end-to-end project management application.</p>
                <p>I also designed a $3.2 million risk management application for a $22 billion insurance company.</p>
                <p>For each of these products, I also led product roadmap and UX discussions with stakeholders.</p>
            </JdXpItem>

            {/* COCC */}
            <JdXpItem
                title="Product Manager"
                imgSrcSet="https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/cocc.webp?alt=media&token=5c6866ea-4a5c-4c8b-b070-f2723b569009"
                xp="7 years"
                fillAmt={1}
            >
                <p>At <JdATag href="https://www.cocc.com/">COCC</JdATag>, I managed, and retained a team of 5 analysts.</p>
                <p>I designed and managed the implementation of 200+ features across 3 products for 120+ clients and 1.2 million users.</p>
                <p>Designed 20+ third party integrations via API and SSO.</p>
                <p>Grew annual revenue by 60% from managed products.</p>
                <p>Presented product roadmaps to large crowds (200+ participants).</p>
            </JdXpItem>

            {/* GRAVIX */}
            <JdXpItem
                title="Co-Founder & Product Designer"
                xp="4 years"
                icon={<GravixIcon />}
                fillAmt={.8}
            >
                <p>Created a digital agency with branding, UX, and marketing services for 10 clients across several industries.</p>
            </JdXpItem>

        </JdViewWrapper>
    )
}