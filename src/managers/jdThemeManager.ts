import jdThemeStore, { JdThemeStore } from "../stores/jdThemeStore";
import { primBg, primBlack, primFg, primWhite } from "../utils/jdColorUtils";

import { JdManagerBase } from "./base/jdManagerBase";

class JdThemeManager extends JdManagerBase<JdThemeStore> {
    public store: JdThemeStore = jdThemeStore;

    public async toggleTheme(): Promise<void> {
        const root: HTMLElement = document.documentElement;
        await this.setStateAsync({ isDarkTheme: !this.store.isDarkTheme });

        // Set bg and fg
        root.style.setProperty(primBg.key, this.store.isDarkTheme ? primBlack.value : primWhite.value);
        root.style.setProperty(primFg.key, this.store.isDarkTheme ? primWhite.value : primBlack.value);
    }
}

const jdThemeManager: JdThemeManager = new JdThemeManager();
export default jdThemeManager;