import { useParams, useLoaderData, Link } from "react-router-dom";
import { Bathroom, Bedroom, Area } from "@icons";
import CompactNumber from "@utils/CompactNumber";
import Facility from "@containers/Facility";

const Property = ({ name, value, icon }) => (
   <div className="grid gap-y-2 leading-none">
      <h1>{name}</h1>
      <div className="flex items-center gap-x-2 sm:gap-x-4">
         {icon}
         <span className="text-gray-600 font-semibold">{value}</span>
      </div>
   </div>
);

export default () => {
   const { id } = useParams();
   const estates = useLoaderData();

   let estate = null, otherEstates = []; //prettier-ignore

   estates.forEach((currentEstate) => {
      currentEstate.id === id
         ? (estate = currentEstate)
         : otherEstates.push(currentEstate);
   });

   document.title = `Horizon  |  ${estate.estate_title}`;

   return (
      <section className="my-4 lg:mb-12 grid items-start gap-y-12 lg:grid-cols-[1fr_18rem] gap-x-10">
         <section className="grid gap-y-10">
            <img
               src={estate.image}
               className="w-full h-full lg:max-h-[32rem] object-cover rounded-xl"
            />

            <main className="grid gap-y-8 sm:gap-y-12 sm:text-lg">
               <div className="grid gap-y-4 lg:flex justify-between gap-x-4">
                  <div className="grid gap-y-2">
                     <h1 className="text-2xl font-bold text-gray-800">
                        {estate.estate_title}
                     </h1>

                     <span className="font-medium">{estate.location}</span>
                  </div>

                  <div className="grid">
                     <p className="flex items-center gap-x-2">
                        <span className="font-semibold text-gray-800">
                           Price:
                        </span>
                        <span className="text-2xl font-bold text-primary-500">
                           $
                           {estate.price > 10000000
                              ? CompactNumber(estate.price)
                              : estate.price}
                        </span>
                     </p>

                     <div>
                        {estate.status === "sale" ? "For sale" : "Per month"}
                     </div>
                  </div>
               </div>

               <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  className="p-3 sm:p-4 flex justify-self-start gap-x-3 sm:gap-x-6 border rounded-lg sm:text-base"
               >
                  <>
                     <Property
                        icon={<Bedroom />}
                        name="Bedroom"
                        value={estate.bedrooms}
                     />
                     <div className="inline-block  border-r-2 bg-gray-200 h-full flex-shrink-0" />
                     <Property
                        icon={<Bathroom />}
                        name="Bathroom"
                        value={estate.bathrooms}
                     />
                     <div className="inline-block  border-r-2 bg-gray-200 h-full flex-shrink-0" />
                     <Property
                        icon={<Area />}
                        name="Area"
                        value={estate.area}
                     />
                  </>
               </div>

               <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  className="grid gap-y-2"
               >
                  <h1 className="font-semibold text-gray-800 text-lg">
                     Description
                  </h1>
                  <p className="">{estate.description}</p>
               </div>

               <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  className="grid gap-y-2"
               >
                  <h1 className="font-semibold text-gray-800 text-lg">
                     Facilities
                  </h1>
                  <div className="flex items-center flex-wrap gap-x-8 sm:gap-x-12 gap-y-3 sm:gap-y-4 text-base">
                     {estate.facilities.map((facility) => (
                        <Facility key={facility} type={facility} />
                     ))}
                  </div>
               </div>
            </main>
         </section>

         <aside className="grid gap-y-6 content-start">
            <h1 className="font-semibold text-lg text-gray-800">
               You may also like
            </h1>

            <main className="grid gap-y-6">
               {otherEstates
                  .reverse()
                  .slice(0, 3)
                  .map((estate) => (
                     <Link to={`/estate/${estate.id}`} key={estate.id}>
                        <article
                           data-aos="zoom-in-left"
                           data-aos-anchor-placement="top-bottom"
                           className="relative p-5 w-full h-48 flex flex-col rounded-lg text-white overflow-hidden"
                        >
                           <img
                              src={estate.image}
                              className="absolute inset-0 w-full h-full object-cover"
                           />
                           <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50" />
                           <div className="mt-auto relative grid gap-y-1">
                              <h1 className="font-semibold">
                                 {estate.estate_title}
                              </h1>
                              <p className="text-sm">{estate.location}</p>
                           </div>
                        </article>
                     </Link>
                  ))}
            </main>
         </aside>
      </section>
   );
};
