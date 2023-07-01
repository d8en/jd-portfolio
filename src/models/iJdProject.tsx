import { IJdSkillCo } from "./iJdSkillCo";

export interface IJdProject {
    title: string;
    desc: string;
    company: IJdSkillCo;
    skills: IJdSkillCo[];
    image: string;
    component: React.JSX.Element;
    isOpen?: boolean;
}