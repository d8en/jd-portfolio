import jdThemeStore, { JdThemeStore } from "../stores/jdThemeStore";
import { JdManagerBase } from "./base/jdManagerBase";

class JdThemeManager extends JdManagerBase<JdThemeStore> {
    public store: JdThemeStore = jdThemeStore;

    public async toggleTheme(): Promise<void> {
        await this.setStateAsync({ isDarkTheme: !this.store.isDarkTheme });
    }
}

const jdThemeManager: JdThemeManager = new JdThemeManager();
export default jdThemeManager;