import { JdManagerBase } from "./base/jdManagerBase";
import jdProjectStore, { JdProjectStore } from '../stores/jdProjectStore';

class JdProjectManager extends JdManagerBase<JdProjectStore> {
    public store: JdProjectStore = jdProjectStore;
}

const jdProjectManager: JdProjectManager = new JdProjectManager();
export default jdProjectManager;