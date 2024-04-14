import { Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { Toaster } from "react-hot-toast";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import { AuthProvider } from "@contexts/AuthContext";

export default () => {
   const location = useLocation();
   useLayoutEffect(() => {
      if (location.pathname !== "/") document.documentElement.scrollTo(0, 0);
   }, [location.pathname]);

   return (
      <AuthProvider>
         <Toaster />
         <Header />

         <main className="px-5 lg:px-0 mt-16 lg:mt-0 mx-auto container grid gap-y-16 lg:gap-y-24">
            <Outlet />
         </main>
         <Footer />
      </AuthProvider>
   );
};
