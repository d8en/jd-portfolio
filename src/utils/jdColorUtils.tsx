import { IJdThemeKeyValue } from "../models/iJdThemeKeyValue";

export const rootStyles: CSSStyleDeclaration = getComputedStyle(document.documentElement);

export const primFg: IJdThemeKeyValue = {
    key: '--primFg',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const primBg: IJdThemeKeyValue = {
    key: '--primBg',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const primBlack: IJdThemeKeyValue = {
    key: '--primBlack',
    get value(): string { return rootStyles.getPropertyValue(this.key); }
}

export const primWhite: IJdThemeKeyValue = {
    key: '--primWhite',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const baseShadow: IJdThemeKeyValue = {
    key: '--baseShadow',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const darkShadow: IJdThemeKeyValue = {
    key: '--darkShadow',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const lightShadow: IJdThemeKeyValue = {
    key: '--lightShadow',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const blurBg: IJdThemeKeyValue = {
    key: '--blurBg',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const darkBlurBg: IJdThemeKeyValue = {
    key: '--darkBlurBg',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const lightBlurBg: IJdThemeKeyValue = {
    key: '--lightBlurBg',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const link: IJdThemeKeyValue = {
    key: '--link',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const darkLink: IJdThemeKeyValue = {
    key: '--darkLink',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const lightLink: IJdThemeKeyValue = {
    key: '--lightLink',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const greyText: IJdThemeKeyValue = {
    key: '--greyText',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const lightGreyText: IJdThemeKeyValue = {
    key: '--lightGreyText',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const darkGreyText: IJdThemeKeyValue = {
    key: '--darkGreyText',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const greyLine: IJdThemeKeyValue = {
    key: '--greyLine',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const darkGreyLine: IJdThemeKeyValue = {
    key: '--darkGreyLine',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const lightGreyLine: IJdThemeKeyValue = {
    key: '--lightGreyLine',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const greyBg: IJdThemeKeyValue = {
    key: '--greyBg',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const darkGreyBg: IJdThemeKeyValue = {
    key: '--darkGreyBg',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}

export const lightGreyBg: IJdThemeKeyValue = {
    key: '--lightGreyBg',
    get value(): string { return rootStyles.getPropertyValue(this.key) }
}