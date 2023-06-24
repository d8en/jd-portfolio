import { RouteObject } from "react-router-dom";
import { JdAppViewWrapper } from "../views/jdAppView/jdAppViewWrapper";

class JdRoutes {
    public routes: RouteObject = {
        path: '/',
        element: <JdAppViewWrapper />,
    }
}

const jdRoutes: JdRoutes = new JdRoutes();
export default jdRoutes;