import { useLoaderData } from "react-router-dom";
import { isSavedInLocalStorage } from "@utils/localStorageData";
import EstateCard from "@containers/EstateCard";

export default () => {
   document.title = "Horizon  |  Saved Properties";
   const data = useLoaderData();

   let realEstateData = data.filter((estate) =>
      isSavedInLocalStorage(estate.id)
   );

   return (
      <section className="grid gap-y-6 lg:gap-y-12">
         <div className="px-8 py-14 bg-primary-50 text-3xl lg:text-5xl font-extrabold text-primary-500 text-center rounded-lg">
            Saved Properties
         </div>

         <main className="grid lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-y-16">
            {realEstateData.map((estate) => (
               <EstateCard key={estate.id} data={estate} />
            ))}
         </main>
      </section>
   );
};
