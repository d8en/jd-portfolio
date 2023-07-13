import { RouteObject } from "react-router-dom";
import { JdHomeView } from "../views/jdHomeView/jdHomeView";
import { JdAppView } from "../views/jdAppView/jdAppView";
import { JdErrorView } from "../views/jdErrorView/jdErrorView";
import { ReactComponent as HomeIcon } from '../assets/svg/icons/house.svg';
import { ReactComponent as ProjectsIcon } from '../assets/svg/icons/checklist.svg';
import { ReactComponent as SkillsIcon } from '../assets/svg/icons/tools.svg';
import { ReactComponent as BriefcaseIcon } from '../assets/svg/icons/briefcase.svg';
import { JdSkillsView } from "../views/jdSkillsView/jdSkillsView";
import { JdXpView } from "../views/jdXpView/jdXpView";
import { JdProjectsView } from "../views/jdProjectsView/jdProjectsView";

export type IJdRouteObj = RouteObject & {
    name: string;
    icon: React.JSX.Element;
    isHidden?: boolean;
}
class JdRoutes {

    public home: IJdRouteObj = {
        name: 'Home',
        path: '/',
        element: <JdHomeView />,
        errorElement: <JdErrorView />,
        icon: <HomeIcon />,
    }

    public projects: IJdRouteObj = {
        name: 'Projects',
        path: '/projects',
        element: <JdProjectsView />,
        errorElement: <JdErrorView />,
        icon: <ProjectsIcon />,
    }

    public skills: IJdRouteObj = {
        name: 'Skills',
        path: '/skills',
        element: <JdSkillsView />,
        errorElement: <JdErrorView />,
        icon: <SkillsIcon />,
    }

    public experience: IJdRouteObj = {
        name: 'Experience',
        path: '/experience',
        element: <JdXpView />,
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
            if (
                !routeObj.name ||
                routeObj.isHidden
            ) continue;

            routes.push(routeObj);
        }
        return routes;
    }

    public get activeRoute(): IJdRouteObj {
        const activeRoute: IJdRouteObj | undefined = this.allRoutes.find((route: IJdRouteObj) => route.path === window.location.pathname);
        return activeRoute ?? this.home;
    }

    public get routesToHideNav(): IJdRouteObj[] {
        return [this.home];
    }
}

const jdRoutes: JdRoutes = new JdRoutes();
export default jdRoutes;