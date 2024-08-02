import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import jdRoutes from '../../utils/jdRoutes';

export function JdAppViewWrapper(): React.JSX.Element {
    const router = createBrowserRouter([jdRoutes.registerRoutes]);
    return <RouterProvider router={router} />;
}
