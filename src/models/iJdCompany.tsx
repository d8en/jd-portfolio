import { IJdSkillCoBase } from "./base/iJdSkillCoBase";
import { JdCompanyType } from "./enums/jdCompanyType";

export interface IJdCompany extends IJdSkillCoBase {
    type: JdCompanyType;
}