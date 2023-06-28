import { JdCompanyType } from "./enums/jdCompanyType";
import { JdSkillType } from "./enums/jdSkillType";

export interface IJdProject {
    title: string;
    desc: string;
    company: JdCompanyType[];
    skills: JdSkillType[];
    image: string;
    component: React.JSX.Element;
}