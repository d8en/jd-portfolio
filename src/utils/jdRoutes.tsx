import { RouteObject } from "react-router-dom";
import { JdHomeView } from "../views/jdHomeView/jdHomeView";
import { JdAppView } from "../views/jdAppView/jdAppView";
import { JdErrorView } from "../views/jdErrorView/jdErrorView";
import { ReactComponent as HomeIcon } from '../assets/svg/icons/house.svg';
import { ReactComponent as ProjectsIcon } from '../assets/svg/icons/checklist.svg';
import { ReactComponent as SkillsIcon } from '../assets/svg/icons/tools.svg';
import { ReactComponent as BriefcaseIcon } from '../assets/svg/icons/briefcase.svg';

export type IJdRouteObj = RouteObject & {
    name: string;
    icon: React.JSX.Element;
    isHidden?: boolean;
}
class JdRoutes {

    public home: IJdRouteObj = {
        name: 'home',
        path: '/',
        element: <JdHomeView />,
        errorElement: <JdErrorView />,
        icon: <HomeIcon />,
    }

    public projects: IJdRouteObj = {
        name: 'projects',
        path: '/projects',
        element: <></>,
        errorElement: <JdErrorView />,
        icon: <ProjectsIcon />,
    }

    public skills: IJdRouteObj = {
        name: 'skills',
        path: '/skills',
        element: <></>,
        errorElement: <JdErrorView />,
        icon: <SkillsIcon />,
    }

    public experience: IJdRouteObj = {
        name: 'experience',
        path: '/experience',
        element: <></>,
        errorElement: <JdErrorView />,
        icon: <BriefcaseIcon />,
    }

    public registerRoutes: RouteObject = {
        path: '/',
        element: <JdAppView />,
        errorElement: <JdErrorView />,
        children: this.allRoutes,
    }

    public get allRoutes(): IJdRouteObj[] {
        const routes: IJdRouteObj[] = [];
        for (const route of Object.entries(this)) {
            const routeObj: IJdRouteObj = route[1];
            if (routeObj.element) routes.push(routeObj);
        }
        return routes;
    }

    public get visibleRoutes(): IJdRouteObj[] {
        const routes: IJdRouteObj[] = [];
        for (const route of Object.entries(this)) {
            const routeObj: IJdRouteObj = route[1];
            if (routeObj.element && !routeObj.isHidden) routes.push(routeObj);
        }
        return routes;
    }
}

const jdRoutes: JdRoutes = new JdRoutes();
export default jdRoutes;