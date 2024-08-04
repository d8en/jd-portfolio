import { makeAutoObservable } from 'mobx';
import BoomIcon from '../assets/svg/brands/boomerang.svg?react';
import RekIcon from '../assets/svg/brands/rek.svg?react';
import GravixIcon from '../assets/svg/brands/gravix.svg?react';
import JdIcon from '../assets/svg/brands/jdSmall.svg?react';
import MarketAxess from '../assets/svg/brands/marketAxess.svg?react';
import { JdATag } from '../components/jdATag/jdATag';
import jdObjUtils from '../utils/jdObjUtils';
import { IJdSkillCo } from '../models/iJdSkillCo';
import styles from './storeStyles.module.scss';

export class JdCompaniesStore {
    constructor() {
        makeAutoObservable(this);
    }

    public marketAxess: IJdSkillCo = {
        name: 'Senior Software Engineer',
        companyName: 'MarketAxess',
        startYear: '2023',
        xpPercentage: 0.7,
        icon: <MarketAxess className={styles.themedIcon} />,
        component: (
            <>
                <p>
                    At <JdATag href="https://www.marketaxess.com/">MarketAxess</JdATag>, I'm leading the development of a web app used by 600+ bond traders.
                </p>
                <p>
                    I work with stakeholders and our enterprise architects to design, build, and test new applications and features while contributing towards overall application
                    strategy / architecture.
                </p>
            </>
        ),
    };

    public boomerang: IJdSkillCo = {
        name: 'Lead Frontend Engineer',
        companyName: 'Boomerang',
        endYear: '2023',
        startYear: '2021',
        xpPercentage: 0.75,
        icon: <BoomIcon />,
        component: (
            <>
                <p>
                    At <JdATag href="https://boomreturns.io/">Boomerang</JdATag>, I built 5 web apps, 1 native mobile app, and 1 website used by 200+ users across 5+ clients. These
                    products helped us secure $1.3 million funding over the course of 2 years.
                </p>
                <p>I integrate all internal and third party APIs and model database architecture with fellow backend engineers.</p>
                <p>I am also the lead product designer for all web and mobile apps and marketing content.</p>
            </>
        ),
    };

    public rek: IJdSkillCo = {
        name: 'Founder / Full Stack',
        companyName: 'Rek it.',
        startYear: '2020',
        xpPercentage: 0.75,
        icon: <RekIcon />,
        component: (
            <>
                <p>
                    At <JdATag href="https://rekit.app/">Rek</JdATag>, I designed and built a native mobile app (iOS and Android) and a website to promote the product.
                </p>
                <p>I grew the product to 200+ users in the first month with over 600 recommendations and a 5 star rating in the iOS app store.</p>
            </>
        ),
    };

    public primacy: IJdSkillCo = {
        name: 'Lead Product Designer',
        companyName: 'Primacy',
        invertImageColors: true,
        startYear: '2018',
        endYear: '2021',
        xpPercentage: 0.75,
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/primacy.webp?alt=media',
        component: (
            <>
                <p>
                    At <JdATag href="https://www.theprimacy.com/">Primacy</JdATag>, I was the sole designer on a $1.5 million end-to-end project management application.
                </p>
                <p>I also designed a $3.2 million risk management application for a $22 billion insurance company.</p>
                <p>For each of these products, I also led product roadmap and UX discussions with stakeholders.</p>
            </>
        ),
    };

    public cocc: IJdSkillCo = {
        name: 'Product Manager',
        companyName: 'COCC',
        startYear: '2012',
        endYear: '2019',
        xpPercentage: 1,
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/cocc.webp?alt=media',
        component: (
            <>
                <p>
                    At <JdATag href="https://www.cocc.com/">COCC</JdATag>, I designed and managed the implementation of 200+ features across 3 flagship products for 120+ clients
                    and 1.2 million users, including 20+ third party integrations.
                </p>
                <p>I also managed and retained a team of 5 analysts and worked directly with C-level executives on roadmaps, strategy, and growth.</p>
                <p>The products I was responsible for contributed towards annual revenue growth of 60%.</p>
            </>
        ),
    };

    public gravix: IJdSkillCo = {
        name: 'Co-Founder & Designer',
        companyName: 'Gravix',
        startYear: '2014',
        endYear: '2019',
        xpPercentage: 0.8,
        icon: <GravixIcon className={styles.themedIcon} />,
        component: (
            <>
                <p>At Gravix, I created a digital agency with branding, UX, and marketing services for 10+ clients.</p>
                <p>I worked directly with co-founders, executives, and middle management to develop branding, UX/CX, and growth plans for products and services.</p>
            </>
        ),
    };

    public weekendProjects: IJdSkillCo = {
        name: 'Curious Human',
        companyName: 'Weekend Projects',
        startYear: '2010',
        xpPercentage: 1,
        icon: <JdIcon />,
        component: (
            <>
                <p>Weekend projects are super important to me. I'm ever curious and always need some sort of creative outlet to recharge.</p>
            </>
        ),
    };

    public get companies(): IJdSkillCo[] {
        return jdObjUtils.getValues(this);
    }
}

const jdCompaniesStore = new JdCompaniesStore();
export default jdCompaniesStore;
