import { JdManagerBase } from "./base/jdManagerBase";
import jdProjectFilterStore, { JdProjectFilterStore } from '../stores/jdProjectFilterStore';

class JdProjectFilterManager extends JdManagerBase<JdProjectFilterStore> {
    public store: JdProjectFilterStore = jdProjectFilterStore;

}
const jdProjectFilterManager: JdProjectFilterManager = new JdProjectFilterManager();
export default jdProjectFilterManager;