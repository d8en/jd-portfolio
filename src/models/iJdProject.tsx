import { JdSkillType } from "./enums/jdSkillType";
import { JdCompanyType } from "./enums/jdCompanyType";

export interface IJdProject {
    title: string;
    desc: string;
    company: JdCompanyType[];
    skills: JdSkillType[];
    image: string;
    component: React.JSX.Element;
}