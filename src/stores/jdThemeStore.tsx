import { makeAutoObservable } from "mobx";

export class JdThemeStore {
    constructor() {
        makeAutoObservable(this);
    }

    public isDarkTheme: boolean = true;
}

const jdThemeStore = new JdThemeStore();
export default jdThemeStore;