import { makeAutoObservable } from "mobx";

export class JdThemeStore {
    constructor() {
        makeAutoObservable(this);
    }
    public isDarkTheme: boolean = false;
}

const jdThemeStore = new JdThemeStore();
export default jdThemeStore;