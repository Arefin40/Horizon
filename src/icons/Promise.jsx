import classNames from "@utils/classNames";

export default ({ className = "w-6 h-6", promise = "pending" }) => {
   const circleClasses = classNames({
      "text-green-500": promise === "resolved",
      "text-rose-500": promise === "rejected",
   });

   const crossClasses = classNames({
      "visible scale-100": promise === "rejected",
      "invisible scale-0": promise !== "rejected",
   });

   const isDone = promise === "resolved" || promise === "rejected";

   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={`${className} origin-center`}
      >
         {/* Outer Filled circle */}
         {isDone && (
            <circle
               cx="12"
               cy="12"
               r="12"
               className={`fill-current animate-[scale-bounce_250ms_forwards] origin-center ${circleClasses}`}
            />
         )}

         {/* Outline & Cut */}
         {!isDone && (
            <g
               fill="none"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeMiterlimit="0"
               strokeWidth="2.5"
               className="stroke-current animate-spin origin-center"
            >
               <circle cx="12" cy="12" r="7.75" className="text-gray-200" />
               <path
                  className="text-gray-600"
                  d="M19.75 12a7.75 7.75 0 0 1-2.577 5.771 7.75 7.75 0 0 1-6.018 1.933"
               />
            </g>
         )}

         <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="0"
            strokeWidth="2"
            className="text-white"
         >
            {/* Cross */}
            <>
               <path
                  className={`stroke-current duration-150 delay-75 transition-all origin-center ${crossClasses}`}
                  d="m8.422 8.422 7.156 7.156"
               />
               <path
                  className={`stroke-current duration-150 delay-100 transition-all origin-center ${crossClasses}`}
                  d="m15.578 8.422-7.155 7.156"
               />
            </>

            {/* Tick */}
            {promise === "resolved" && (
               <path
                  fill="none"
                  stroke="#fff"
                  strokeDasharray="13.987278938293457"
                  strokeDashoffset="13.987278938293457"
                  d="m7.054 11.965 3.321 3.32 6.57-6.57"
                  className="animate-[150ms_checkmark_100ms_forwards]"
               />
            )}
         </g>
      </svg>
   );
};
