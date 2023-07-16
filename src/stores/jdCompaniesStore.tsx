import { makeAutoObservable } from "mobx";
import { ReactComponent as BoomIcon } from '../assets/svg/brands/boomerang.svg';
import { ReactComponent as RekIcon } from '../assets/svg/brands/rek.svg';
import { ReactComponent as GravixIcon } from '../assets/svg/brands/gravix.svg';
import { ReactComponent as TypoIcon } from '../assets/svg/brands/typo.svg';
import { JdATag } from "../components/jdATag/jdATag";
import jdObjUtils from "../utils/jdObjUtils";
import { IJdSkillCo } from "../models/iJdSkillCo";

export class JdCompaniesStore {
    constructor() {
        makeAutoObservable(this);
    }

    public boomerang: IJdSkillCo = {
        name: 'VP, Dev & Design',
        companyName: 'boomerang',
        xp: 2,
        xpPercentage: .75,
        icon: <BoomIcon />,
        component:
            <>
                <p>At <JdATag href="https://boomreturns.io/">Boomerang</JdATag>, I built 5 web apps, 1 native mobile app, and 1 website used by 200+ users across 5+ clients. These products helped us secure $1.3 million funding over the course of 2 years.</p>
                <p>I integrated all internal and third party APIs and constructed database architecture with fellow backend engineers.</p>
                <p>I am also the sole designer for all web and mobile apps and marketing content.</p>
            </>
    }

    public rek: IJdSkillCo = {
        name: 'Founder / Full Stack',
        companyName: 'Rek it.',
        xp: 4,
        xpPercentage: .75,
        icon: <RekIcon />,
        component:
            <>
                <p>At <JdATag href="https://rekit.app/">Rek</JdATag>, I designed and built a native mobile app (iOS and Android) and a website to promote the product.</p>
                <p>I grew the product to 200+ users in the first month and used user feedback to manage feature development and product roadmaps.</p>
            </>
    }

    public primacy: IJdSkillCo = {
        name: 'Product Designer',
        companyName: 'Primacy',
        xp: 2,
        xpPercentage: .75,
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/primacy.webp?alt=media',
        component:
            <>
                <p>At <JdATag href="https://www.theprimacy.com/">Primacy</JdATag>, I was the sole designer on a $1.5 million end-to-end project management application.</p>
                <p>I also designed a $3.2 million risk management application for a $22 billion insurance company.</p>
                <p>For each of these products, I also led product roadmap and UX discussions with stakeholders.</p>
            </>
    }

    public cocc: IJdSkillCo = {
        name: 'Product Manager',
        companyName: 'COCC',
        xp: 7,
        xpPercentage: 1,
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/cocc.webp?alt=media',
        component:
            <>
                <p>At <JdATag href="https://www.cocc.com/">COCC</JdATag>, I designed and managed the implementation of 200+ features across 3 flagship products for 120+ clients and 1.2 million users, including 20+ third party integrations.</p>
                <p>I also managed and retained a team of 5 analysts and worked directly with C-level executives on roadmaps, strategy, and growth.</p>
                <p>The products I was responsible for contributed towards annual revenue growth of 60%.</p>
            </>
    }

    public gravix: IJdSkillCo = {
        name: 'Co-Founder & Designer',
        companyName: 'gravix',
        xp: 4,
        xpPercentage: .8,
        icon: <GravixIcon />,
        component:
            <>
                <p>At gravix, I created a digital agency with branding, UX, and marketing services for 10+ clients.</p>
                <p>I worked directly with co-founders, executives, and middle management to develop branding, UX/CX, and growth plans for products and services.</p>
            </>
    }

    public typo: IJdSkillCo = {
        name: 'Founder & Dev',
        companyName: 'Typo',
        xp: 1,
        xpPercentage: .2,
        icon: <TypoIcon />,
        component:
            <>
                <p>Typo is a text-only social media app that I came up with at 3:00 AM on a Tuesday. Do we really need another hellscape of a social media platform? Probably not, but it's been a super fun design and development exercise.</p>
            </>
    }

    public get companies(): IJdSkillCo[] {
        return jdObjUtils.getAllProperties(this);
    }
}

const jdCompaniesStore = new JdCompaniesStore();
export default jdCompaniesStore;