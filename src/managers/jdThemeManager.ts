import jdThemeStore, { JdThemeStore } from "../stores/jdThemeStore";
import { baseShadow, darkShadow, lightShadow, primBg, primBlack, primFg, primWhite } from "../utils/jdColorUtils";

import { JdManagerBase } from "./base/jdManagerBase";

class JdThemeManager extends JdManagerBase<JdThemeStore> {
    public store: JdThemeStore = jdThemeStore;
    public rootStyle: CSSStyleDeclaration = document.documentElement.style;

    public async toggleTheme(): Promise<void> {
        await this.setStateAsync({ isDarkTheme: !this.store.isDarkTheme });
        this.setTheme();
    }

    public setTheme(): void {
        // Set bg and fg
        this.rootStyle.setProperty(primBg.key, this.store.isDarkTheme ? primBlack.value : primWhite.value);
        this.rootStyle.setProperty(primFg.key, this.store.isDarkTheme ? primWhite.value : primBlack.value);

        // Set shadow
        this.rootStyle.setProperty(baseShadow.key, this.store.isDarkTheme ? darkShadow.value : lightShadow.value);
    }

}

const jdThemeManager: JdThemeManager = new JdThemeManager();
export default jdThemeManager;