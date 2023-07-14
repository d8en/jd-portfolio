import jdSkillsStore, { JdSkillsStore } from "../stores/jdSkillsStore";
import { JdManagerBase } from "./base/jdManagerBase";

class JdSkillsManager extends JdManagerBase<JdSkillsStore> {
    public store: JdSkillsStore = jdSkillsStore;
}

const jdSkillsManager: JdSkillsManager = new JdSkillsManager();
export default jdSkillsManager;