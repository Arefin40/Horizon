import { Outlet } from "react-router-dom";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";

export default () => {
   return (
      <>
         <Header />

         <main className="px-5 lg:px-0 mt-16 lg:mt-0 mx-auto container grid gap-y-16 lg:gap-y-24">
            <Outlet />
         </main>
         <Footer />
      </>
   );
};
