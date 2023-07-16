import { makeAutoObservable } from "mobx";
import { JdThemeType } from "../models/JdThemeType";

export class JdThemeStore {
    constructor() {
        makeAutoObservable(this);
    }
    public userTheme: JdThemeType = JdThemeType.System;
}

const jdThemeStore = new JdThemeStore();
export default jdThemeStore;