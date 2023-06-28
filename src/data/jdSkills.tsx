import { JdSkillType } from "../models/enums/jdSkillType";
import { IJdSkill } from "../models/iJdSkill";
import { ReactComponent as TsIcon } from '../assets/svg/brands/typescript.svg';
import { ReactComponent as ReactIcon } from '../assets/svg/brands/react.svg';
import { ReactComponent as SassIcon } from '../assets/svg/brands/sass.svg';
import { ReactComponent as CssIcon } from '../assets/svg/brands/css.svg';
import { ReactComponent as FigmaIcon } from '../assets/svg/brands/figma.svg';
import { ReactComponent as ReanimatedIcon } from '../assets/svg/brands/swm.svg';
import { ReactComponent as ReduxIcon } from '../assets/svg/brands/redux.svg';
import { ReactComponent as NodeIcon } from '../assets/svg/brands/node.svg';
import { ReactComponent as AdobeAeIcon } from '../assets/svg/brands/ae.svg';
import { ReactComponent as FirebaseIcon } from '../assets/svg/brands/firebase.svg';
import { ReactComponent as BrandIcon } from '../assets/svg/brands/brand.svg';

class JdSkills {

    public typescript: IJdSkill = {
        name: 'Typescript',
        icon: <TsIcon />,
        type: JdSkillType.Typescript,
    }

    public react: IJdSkill = {
        name: 'React',
        icon: <ReactIcon />,
        type: JdSkillType.React,
    }

    public reactNative: IJdSkill = {
        name: 'React Native',
        icon: <ReactIcon />,
        type: JdSkillType.ReactNative,
    }

    public mobX: IJdSkill = {
        name: 'MobX',
        type: JdSkillType.MobX,
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/mobx.webp?alt=media',
    }

    public css: IJdSkill = {
        name: 'CSS',
        type: JdSkillType.Css,
        icon: <CssIcon />,
    }

    public sass: IJdSkill = {
        name: 'Sass',
        type: JdSkillType.Sass,
        icon: <SassIcon />,
    }

    public figma: IJdSkill = {
        name: 'Figma',
        type: JdSkillType.Figma,
        icon: <FigmaIcon />,
    }

    public productDesign: IJdSkill = {
        name: 'Product Design',
        type: JdSkillType.Figma,
        icon: <FigmaIcon />,
    }

    public reanimated: IJdSkill = {
        name: 'React Native Reanimated',
        type: JdSkillType.ReactNativeReanimated,
        icon: <ReanimatedIcon />,
    }

    public redux: IJdSkill = {
        name: 'Redux Toolkit',
        type: JdSkillType.Redux,
        icon: <ReduxIcon />,
    }

    public nodeJs: IJdSkill = {
        name: 'Node.js',
        type: JdSkillType.NodeJs,
        icon: <NodeIcon />,
    }

    public cSharp: IJdSkill = {
        name: 'C#',
        type: JdSkillType.CSharp,
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/c%23.webp?alt=media',
    }

    public noSql: IJdSkill = {
        name: 'NoSQL',
        type: JdSkillType.NoSql,
        icon: <FirebaseIcon />,
    }

    public sql: IJdSkill = {
        name: 'SQL',
        type: JdSkillType.Sql,
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/sql.webp?alt=media',
    }

    public afterEffects: IJdSkill = {
        name: 'After Effects',
        type: JdSkillType.AfterEffects,
        icon: <AdobeAeIcon />,
    }

    public brandDesign: IJdSkill = {
        name: 'Brand Design',
        type: JdSkillType.BrandDesign,
        icon: <BrandIcon />,
    }
}

const jdSkills = new JdSkills();
export default jdSkills;