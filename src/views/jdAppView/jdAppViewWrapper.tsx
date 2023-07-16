import { RouterProvider, createBrowserRouter } from "react-router-dom"
import jdRoutes from "../../utils/jdRoutes"
import { useEffect } from "react";
import jdThemeManager from "../../managers/jdThemeManager";

export function JdAppViewWrapper(): React.JSX.Element {

    // Mount
    useEffect(() => {
        jdThemeManager.setTheme();
    }, []);

    const router = createBrowserRouter([jdRoutes.registerRoutes]);
    return <RouterProvider router={router} />;
}