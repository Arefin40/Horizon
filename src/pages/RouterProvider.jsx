import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@layouts/Layout";
import AuthLayout from "@layouts/AuthLayout";
import ErrorPage from "@pages/ErrorPage";
import Register from "@pages/Register";
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
   {
      path: "/register",
      element: (
         <AuthLayout>
            <Register />
         </AuthLayout>
      ),
   },
]);

export default () => {
   return <RouterProvider router={router} />;
};
