import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/dashboard/Index";
import ProductDetail from "./pages/dashboard/ProductDetail/Index";
import SubcategoryDetail from "./pages/dashboard/SubcategoryDetail/Index";
import Subscribers from "./pages/dashboard/Subscribers/Index";
import Home from "./pages/home/Index";
import Login from "./pages/login/Index";
import Product from "./pages/product/Index";
import FrontSubCategory from "./pages/subcategory/Index";
import Subscribe from "./pages/subscribe/Index";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products/:productId",
    element: <Product />,
  },
  {
    path: "/lol",
    element: <Login />,
  },
  {
    path: "/subscribe",
    element: <Subscribe />,
  },
  {
    path: "/u",
    element: <Dashboard />,
  },
  {
    path: "/u/collections/:collectionId",
    element: <SubcategoryDetail />,
  },
  {
    path: "/u/subscribers",
    element: <Subscribers />,
  },
  {
    path: "/u/products/:productId",
    element: <ProductDetail />,
  },
  {
    path: "/category/:collectionId",
    element: <FrontSubCategory />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
