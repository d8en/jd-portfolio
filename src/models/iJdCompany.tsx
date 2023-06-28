import { JdCompanyType } from "./enums/jdCompanyType";

export interface IJdCompany {
    type: JdCompanyType;
    name: string;
    imgSrc?: string;
    icon?: React.JSX.Element;
}