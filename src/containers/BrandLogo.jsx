import { Link } from "react-router-dom";
import HorizonLogo from "@icons/HorizonLogo";

export default ({ className }) => {
   return (
      <div className={`w-full flex items-center ${className} flex-shrink-0`}>
         <Link to="/" className="flex items-center gap-x-2">
            <HorizonLogo className="w-6 h-6 lg:w-7 lg:h-7" />
            <h1 className="font-extrabold text-2xl lg:text-3xl first-letter:text-primary-500 text-primary-800">
               Horizon
            </h1>
         </Link>
      </div>
   );
};
