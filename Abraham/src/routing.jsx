import Home from './views/Home';
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    // {
    //     path: '/services',
    //     element: <Services/>
    // },

    // {
    //     path: "/*",
    //     element: <Error404 />
    // }
]);

export default router;
