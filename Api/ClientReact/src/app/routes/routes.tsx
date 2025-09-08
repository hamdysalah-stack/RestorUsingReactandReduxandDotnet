import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../home/HomePage";
import Catalog from "../Features/catalog/Catalog";
import ProductDetails from "../Features/catalog/ProductDetails";
import AboutPage from "../about/AboutPage";
import ContactPage from "../contact/ContactPage";

import NotFound from "../error/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/catalog/:id", element: <ProductDetails /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/not-found", element: <NotFound /> },

      { path: "", element: <HomePage /> },

      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
