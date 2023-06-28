import { IJdSkillCoBase } from "./base/iJdSkillCoBase";
import { JdSkillType } from "./enums/jdSkillType";

export interface IJdSkill extends IJdSkillCoBase {
    type: JdSkillType;
}