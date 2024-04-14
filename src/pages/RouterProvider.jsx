import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@layouts/Layout";
import ErrorPage from "@pages/ErrorPage";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: (
               <h1 className="h-96 flex items-center justify-center text-5xl text-center text-gray-800 font-bold">
                  Hello to Home
               </h1>
            ),
         },
      ],
   },
]);

export default () => {
   return <RouterProvider router={router} />;
};
