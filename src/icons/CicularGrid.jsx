export default ({
   className = "p-8 lg:p-12 fixed top-1/2 left-1/2 w-full h-full max-w-full max-h-full aspect-square transform -translate-x-1/2 -translate-y-1/2 opacity-60",
}) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={`${className} stroke-current text-white`}
      >
         <defs>
            <mask id="a" maskUnits="userSpaceOnUse">
               <circle cx="12" cy="12" r="11.95" fill="#fff" />
            </mask>
         </defs>
         <path
            fill="none"
            strokeLinejoin="round"
            strokeMiterlimit="0"
            strokeWidth=".025"
            d="M24 19.967H0M24 4.034H0m24 3.983H0m24 7.967H0m24-3.983H0M19.967 0v24M4.034 0v24M8.017 0v24m7.967-24v24M12.001 0v24"
            mask="url(#a)"
         />
      </svg>
   );
};
