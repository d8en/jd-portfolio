import jdCompaniesStore, { JdCompaniesStore } from "../stores/jdCompaniesStore";
import { JdManagerBase } from "./base/jdManagerBase";

class JdCompaniesManager extends JdManagerBase<JdCompaniesStore>{
    public store: JdCompaniesStore = jdCompaniesStore;
}
const jdCompaniesManager: JdCompaniesManager = new JdCompaniesManager();
export default jdCompaniesManager;