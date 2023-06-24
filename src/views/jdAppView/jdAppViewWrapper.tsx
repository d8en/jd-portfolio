import { RouterProvider, createBrowserRouter } from "react-router-dom"
import jdRoutes from "../../utils/jdRoutes"

export function JdAppViewWrapper(): React.JSX.Element {
    const router = createBrowserRouter([jdRoutes.routes]);
    return <RouterProvider router={router} />;
}