import { Link } from "react-router-dom";
import { Area, Bathroom, Bedroom } from "@icons";
import CompactNumber from "@utils/CompactNumber";
import Button from "@components/Button";

export default ({ data }) => {
   return (
      <article
         data-aos="fade-up"
         data-aos-anchor-placement="top-bottom"
         className="flex max-w-xl flex-col items-start justify-between group"
      >
         <div className="relative w-full">
            <div className="relative w-full aspect-video sm:aspect-[1.5/1] rounded-2xl overflow-hidden">
               <img
                  src={data.image}
                  className="absolute h-full w-full object-cover rounded-2xl transform scale-100 group-hover:scale-110 transition-all duration-300"
               />
            </div>

            <span className="px-2 py-1 sm:px-3 sm:py-1.5 absolute top-3 left-3 sm:top-4 sm:left-4 text-xs sm:text-sm bg-white text-gray-800 rounded-full backdrop-filter backdrop-blur-md bg-opacity-50 font-medium">
               {data.segment_name}
            </span>
         </div>

         <div className="mt-4 group w-full">
            <div className="w-full flex items-center justify-between">
               <h1 className="font-bold text-lg sm:text-xl text-primary-500">
                  ${CompactNumber(data.price)}
                  <span className="ml-2 text-sm text-gray-500">
                     {data.status === "sale" ? "For sale" : "Per month"}
                  </span>
               </h1>

               <div className="flex items-center gap-x-2">
                  <Link to={`/estate/${data.id}`}>
                     <Button
                        rounded
                        variant="outlined"
                        color="primary"
                        size="small"
                     >
                        View details
                     </Button>
                  </Link>
               </div>
            </div>
            <h3 className="mt-1 sm:mt-3 sm:text-lg font-semibold leading-6 text-gray-900">
               <span>{data.estate_title}</span>
            </h3>
            <p className="sm:mt-1 line-clamp-3 text-sm leading-6 text-gray-600">
               {data.location}
            </p>
         </div>

         <div className="mt-4 flex items-center gap-x-5 gap-y-2 flex-wrap">
            <div className="flex items-center gap-x-3">
               <Bedroom />
               {data.bedrooms}
            </div>
            <div className="flex items-center gap-x-3">
               <Bathroom />
               {data.bathrooms}
            </div>
            <div className="flex items-center gap-x-3">
               <Area />
               {data.area}
            </div>
         </div>
      </article>
   );
};
