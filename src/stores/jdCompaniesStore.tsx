import { makeAutoObservable } from "mobx";
import { IJdCompany } from "../models/iJdCompany";
import { ReactComponent as BoomIcon } from '../assets/svg/brands/boomerang.svg';
import { ReactComponent as RekIcon } from '../assets/svg/brands/rek.svg';
import { ReactComponent as GravixIcon } from '../assets/svg/brands/gravix.svg';
import { JdCompanyType } from "../models/enums/jdCompanyType";
import { JdATag } from "../components/jdATag/jdATag";
import jdObjUtils from "../utils/jdObjUtils";

export class JdCompaniesStore {
    constructor() {
        makeAutoObservable(this);
    }

    public boomerang: IJdCompany = {
        name: 'VP, Development & Design',
        type: JdCompanyType.Boomerang,
        xp: 2,
        xpPercentage: .75,
        icon: <BoomIcon />,
        component:
            <>
                <p>At <JdATag href="https://boomreturns.io/">Boomerang</JdATag>, I built 5 web apps, 1 native mobile app, and 1 promotional site to help secure $1.3 million funding.</p>
                <p>I also designed all web and mobile apps as well as marketing content.</p>
                <p>I Integrated all internal and third party APIs.</p>
                <p>Constructed database architecture alongside backend engineers.</p>
            </>
    }

    public rek: IJdCompany = {
        name: 'Founder & Full Stack Dev',
        type: JdCompanyType.Rek,
        xp: 4,
        xpPercentage: .75,
        icon: <RekIcon />,
        component:
            <>
                <p>At <JdATag href="https://rekit.app/">Rek</JdATag>, I designed and built a native mobile app (iOS and Android) and a website to promote the product.</p>
                <p>I grew the product to 200 users in the first month.</p>
                <p>Used user feedback to manage feature development.</p>
            </>
    }

    public primacy: IJdCompany = {
        name: 'Product Designer',
        type: JdCompanyType.Primacy,
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

    public cocc: IJdCompany = {
        name: 'Product Manager',
        type: JdCompanyType.Cocc,
        xp: 7,
        xpPercentage: 1,
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/cocc.webp?alt=media',
        component:
            <>
                <p>At <JdATag href="https://www.cocc.com/">COCC</JdATag>, I managed, and retained a team of 5 analysts.</p>
                <p>I designed and managed the implementation of 200+ features across 3 products for 120+ clients and 1.2 million users.</p>
                <p>Designed 20+ third party integrations via API and SSO.</p>
                <p>Grew annual revenue by 60% from managed products.</p>
                <p>Presented product roadmaps to large crowds (200+ participants).</p>
            </>
    }

    public gravix: IJdCompany = {
        name: 'Co-Founder & Designer',
        type: JdCompanyType.Gravix,
        xp: 4,
        xpPercentage: .8,
        icon: <GravixIcon />,
        component:
            <>
                <p>At gravix, I created a digital agency with branding, UX, and marketing services for 10 clients across several industries.</p>
            </>
    }

    public get companies(): IJdCompany[] {
        return jdObjUtils.getAllProperties(this);
    }
}

const jdCompaniesStore = new JdCompaniesStore();
export default jdCompaniesStore;