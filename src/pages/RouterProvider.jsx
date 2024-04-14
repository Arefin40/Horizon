import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@layouts/Layout";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import EstateDetails from "@pages/EstateDetails";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Home />,
            loader: () => fetch("/real_estate.json"),
         },
         {
            path: "/estate/:id",
            element: <EstateDetails />,
            loader: () => fetch("/real_estate.json"),
         },
      ],
   },
]);

export default () => {
   return <RouterProvider router={router} />;
};
