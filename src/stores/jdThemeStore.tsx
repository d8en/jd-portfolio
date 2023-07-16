import { makeAutoObservable } from "mobx";
import jdContactManager from "../managers/jdContactManager";
import jdProjectManager from "../managers/jdProjectManager";

export class JdThemeStore {
    constructor() {
        makeAutoObservable(this);
    }

    public isDarkTheme: boolean = true;
    public isFloatingShowing: boolean = false;
    public hasFloatShown: boolean = false;

    public get canShowFloat(): boolean {
        if (
            jdContactManager.store.hasFloatShown
            &&
            !jdProjectManager.store.isFloatingHelp
            &&
            this.isFloatingShowing
            &&
            !this.hasFloatShown
        ) return true;
        return false;
    }
}

const jdThemeStore = new JdThemeStore();
export default jdThemeStore;