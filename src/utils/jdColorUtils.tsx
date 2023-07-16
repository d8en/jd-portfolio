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
