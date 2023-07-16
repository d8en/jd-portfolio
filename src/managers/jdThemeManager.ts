import jdThemeStore, { JdThemeStore } from "../stores/jdThemeStore";
import { JdManagerBase } from "./base/jdManagerBase";

class JdThemeManager extends JdManagerBase<JdThemeStore> {
    public store: JdThemeStore = jdThemeStore;
}

const jdThemeManager: JdThemeManager = new JdThemeManager();
export default jdThemeManager;