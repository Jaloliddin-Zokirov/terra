import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes.jsx";
import { Provider } from "react-redux";
import Store from "./Store/Store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
