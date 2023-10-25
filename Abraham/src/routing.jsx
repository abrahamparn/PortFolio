import HomePage from './views/HomePage';
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
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
