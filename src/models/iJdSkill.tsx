import { JdSkillType } from "./enums/JdSkillType";

export interface IJdSkill {
    type: JdSkillType;
    name: string;
    imgSrc?: string;
    icon?: React.JSX.Element;
    isSelected: boolean;
}