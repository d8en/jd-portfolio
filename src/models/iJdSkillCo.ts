export interface IJdSkillCo {
    name: string;
    component: React.JSX.Element;
    xpPercentage: number;
    startYear: string;

    companyName?: string;
    invertImageColors?: boolean;
    endYear?: string;
    isSelected?: boolean;
    icon?: React.JSX.Element;
    imgSrc?: string;
}
