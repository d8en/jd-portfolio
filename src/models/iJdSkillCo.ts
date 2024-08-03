export interface IJdSkillCo {
    name: string;
    companyName?: string;
    imgSrc?: string;
    icon?: React.JSX.Element;
    component: React.JSX.Element;
    isSelected?: boolean;
    startYear: string;
    xpPercentage: number;
    invertImageColors?: boolean;
}
