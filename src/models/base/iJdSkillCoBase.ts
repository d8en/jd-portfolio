export interface IJdSkillCoBase {
    name: string;
    imgSrc?: string;
    icon?: React.JSX.Element;
    component: React.JSX.Element;
    isSelected?: boolean;
    xp: number;
    xpPercentage: number;
}