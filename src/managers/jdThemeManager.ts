import jdThemeStore, { JdThemeStore } from "../stores/jdThemeStore";
import { baseShadow, blurBg, darkBlurBg, darkLink, darkShadow, lightBlurBg, lightLink, lightShadow, link, primBg, primBlack, primFg, primWhite } from "../utils/jdColorUtils";

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

        // Set blur styles
        this.rootStyle.setProperty(blurBg.key, this.store.isDarkTheme ? darkBlurBg.value : lightBlurBg.value);

        // Set link
        this.rootStyle.setProperty(link.key, this.store.isDarkTheme ? darkLink.value : lightLink.value);
    }

}

const jdThemeManager: JdThemeManager = new JdThemeManager();
export default jdThemeManager;