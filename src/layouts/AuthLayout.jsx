import { useLayoutEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "@contexts/AuthContext";
import CicularGrid from "@icons/CicularGrid";

export default ({ children }) => {
   const location = useLocation();
   useLayoutEffect(() => {
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
   }, [location.pathname]);

   return (
      <AuthProvider>
         <Toaster />

         <div className="fixed inset-0 bg-auth bg-cover bg-center" />
         <CicularGrid />

         <main className="my-6 relative p-5 w-full max-w-screen-md min-h-screen flex items-center justify-center mx-auto">
            {children}
         </main>
      </AuthProvider>
   );
};
