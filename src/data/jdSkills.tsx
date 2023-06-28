import React from "react";
import { IJdSkill } from "../models/iJdSkill";
import { ReactComponent as TsIcon } from '../assets/svg/brands/typescirpt.svg';
import { JdSkillType } from "../models/enums/JdSkillType";

export const jdSkills: IJdSkill[] = [
    {
        name: 'Typescript',
        icon: <TsIcon />,
        type: JdSkillType.Typescript,
    }
];