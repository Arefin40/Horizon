export default ({ className = "w-full h-full" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={`${className} fill-current`}
      >
         <g fillRule="evenodd">
            <path
               className="text-primary-950"
               d="M18.949 21.67a.203.203 0 0 0 .052.075 12.001 12.001 0 0 1-13.996.008.173.173 0 0 0 .046-.075l1.102-2.76a4.5 4.5 0 0 1 4.186-2.836h3.322a4.5 4.5 0 0 1 4.178 2.828zm-3.3-13.096a3.645 3.645 0 1 1-3.646-3.645 3.645 3.645 0 0 1 3.646 3.645z"
            />
            <path
               className="text-primary-400"
               d="M12.004 0a12.001 12.001 0 0 0-8.033 20.92l.997-2.484a5.76 5.76 0 0 1 5.378-3.645h3.323a5.76 5.76 0 0 1 5.363 3.645l.998 2.483A12.001 12.001 0 0 0 12.004 0zm0 13.501a4.928 4.928 0 1 1 4.928-4.928 4.928 4.928 0 0 1-4.928 4.928z"
            />
         </g>
      </svg>
   );
};
