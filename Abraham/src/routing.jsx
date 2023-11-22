import Home from "./views/Home";
import Error404 from "./views/Error404";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/*",
    element: <Error404 />,
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
