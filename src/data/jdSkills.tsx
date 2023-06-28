import { JdSkillType } from "../models/enums/jdSkillType";
import { IJdSkill } from "../models/iJdSkill";
import { ReactComponent as TsIcon } from '../assets/svg/brands/typescript.svg';
import { ReactComponent as ReactIcon } from '../assets/svg/brands/react.svg';

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
}

const jdSkills = new JdSkills();
export default jdSkills;