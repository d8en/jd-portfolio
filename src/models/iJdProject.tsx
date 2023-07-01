import { IJdSkillCo } from "./iJdSkillCo";

export interface IJdProject {
    id: string;
    title: string;
    desc: string;
    company: IJdSkillCo;
    skills: IJdSkillCo[];
    image: string;
    component: React.JSX.Element;
    isOpen?: boolean;
}