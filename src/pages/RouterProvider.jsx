import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@layouts/Layout";
import AuthLayout from "@layouts/AuthLayout";
import PrivateRoute from "@layouts/PrivateRoute";
import ErrorPage from "@pages/ErrorPage";
import Register from "@pages/Register";
import Login from "@pages/Login";
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
            element: (
               <PrivateRoute>
                  <EstateDetails />
               </PrivateRoute>
            ),
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
   {
      path: "/login",
      element: (
         <AuthLayout>
            <Login />
         </AuthLayout>
      ),
   },
]);

export default () => {
   return <RouterProvider router={router} />;
};
