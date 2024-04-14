export default ({ className = "w-full h-full" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={`${className} stroke-current text-gray-400`}
      >
         <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="0"
            strokeWidth="1.8"
            // d="M2.015 5.1s7.715 7.632 9.72 7.655c2.005.023 9.881-7.606 9.881-7.606M6.893 2h10.215c3.265 0 5.893 2.757 5.893 6.181v7.638C23 19.243 20.373 22 17.108 22H6.893C3.63 22 1 19.243 1 15.819V8.18C1 4.757 3.63 2 6.893 2z"
            d="M1.925 5.376s7.784 7.327 9.808 7.349c2.023.022 9.97-7.302 9.97-7.302M6.846 2.4h10.307A5.927 5.927 0 0 1 23.1 8.334v7.332a5.927 5.927 0 0 1-5.946 5.934H6.847A5.927 5.927 0 0 1 .9 15.666V8.334A5.927 5.927 0 0 1 6.847 2.4z"
            // d="M1.789 5.273s7.89 7.44 9.94 7.463c2.05.023 10.106-7.415 10.106-7.415M6.777 2.25h10.447a6.013 6.013 0 0 1 6.027 6.026v7.446a6.013 6.013 0 0 1-6.027 6.027H6.777a6.013 6.013 0 0 1-6.026-6.027V8.277A6.013 6.013 0 0 1 6.777 2.25z"
         />
      </svg>
   );
};
