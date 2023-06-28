import { IJdSkillCoBase } from "./base/iJdSkillCoBase";
import { JdSkillType } from "./enums/JdSkillType";

export interface IJdSkill extends IJdSkillCoBase {
    type: JdSkillType;
}