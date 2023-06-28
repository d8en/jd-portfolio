import { JdSkillType } from "../models/enums/jdSkillType";
import { IJdSkill } from "../models/iJdSkill";
import { ReactComponent as TsIcon } from '../assets/svg/brands/typescript.svg';
import { ReactComponent as ReactIcon } from '../assets/svg/brands/react.svg';
import { ReactComponent as SassIcon } from '../assets/svg/brands/sass.svg';
import { ReactComponent as CssIcon } from '../assets/svg/brands/css.svg';

class JdSkills {

    public typescript: IJdSkill = {
        name: 'Typescript',
        tag: 'typescript',
        icon: <TsIcon />,
        type: JdSkillType.Typescript,
    }

    public react: IJdSkill = {
        name: 'React',
        tag: 'react',
        icon: <ReactIcon />,
        type: JdSkillType.React,
    }

    public reactNative: IJdSkill = {
        name: 'React Native',
        tag: 'reactnative',
        icon: <ReactIcon />,
        type: JdSkillType.ReactNative,
    }

    public mobX: IJdSkill = {
        name: 'MobX',
        tag: 'mobx',
        type: JdSkillType.MobX,
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/jd-portfolio-334c7.appspot.com/o/mobx.webp?alt=media',
    }

    public css: IJdSkill = {
        name: 'CSS',
        tag: 'css',
        type: JdSkillType.Css,
        icon: <CssIcon />,
    }
}

const jdSkills = new JdSkills();
export default jdSkills;