import { RouteObject } from "react-router-dom";
import { JdHomeView } from "../views/jdHomeView/jdHomeView";
import { JdAppView } from "../views/jdAppView/jdAppView";

export type IJdRouteObj = RouteObject & {
    name: string;
}
class JdRoutes {

    public home: IJdRouteObj = {
        name: 'Home',
        path: '/',
        element: <JdHomeView />,
    }

    public registerRoutes: RouteObject = {
        path: '/',
        element: <JdAppView />,
        children: this.allRoutes,
    }

    public get allRoutes(): RouteObject[] {
        const routes: RouteObject[] = [];
        for (const route of Object.entries(this)) {
            const routeObj: RouteObject = route[1];
            if (routeObj.element) routes.push(routeObj);
        }
        return routes;
    }
}

const jdRoutes: JdRoutes = new JdRoutes();
export default jdRoutes;