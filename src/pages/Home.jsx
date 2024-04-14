import HeroSection from "@containers/HeroSection";
import { useRef } from "react";

export default () => {
   document.title = "Horizon";
   const estateSectionRef = useRef();

   return (
      <>
         <HeroSection estateSectionRef={estateSectionRef} />

         <section ref={estateSectionRef} className="grid gap-y-6 lg:gap-y-12">
            <header className="text-center grid gap-y-3 lg:gap-y-6 justify-items-center">
               <h1 className="font-bold lg:font-extrabold text-2xl lg:text-4xl text-gray-800">
                  Real Estates
               </h1>
               <p className="max-w-3xl lg:text-lg">
                  Find luxury Penthouse, Beachfront properties, Resorts, Pivate
                  Islands, Villas, Mansions.
               </p>
            </header>

            <main className="flex items-center justify-center">Content</main>
         </section>
      </>
   );
};
