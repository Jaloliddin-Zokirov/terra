import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Cars from "../Pages/Cars/Cars";
import Brands from "../Components/Brands/Brands";
import Services from "../Components/Services/Services";
import About from "../Pages/About/About";
import Contacts from "../Pages/Contacts/Contacts";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Condition from "../Pages/Condition/Condition";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cars",
        element: <Cars />,
      },
      {
        path: "brands",
        element: <Brands />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contacts />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "condition",
        element: <Condition />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
