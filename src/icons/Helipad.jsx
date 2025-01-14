export default ({ className = "w-full h-full" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={`${className} fill-current`}
      >
         <path d="M7.92 7.2v9.36a.48.48 0 0 0 .48.48h1.976a.48.48 0 0 0 .48-.48v-2.88a.48.48 0 0 1 .48-.48h1.4a.48.48 0 0 1 .48.48v2.88a.48.48 0 0 0 .48.48H15.6a.48.48 0 0 0 .48-.48V7.2a.48.48 0 0 0-.48-.48h-1.905a.48.48 0 0 0-.48.48v2.64a.48.48 0 0 1-.48.48h-1.399a.48.48 0 0 1-.48-.48V7.2a.48.48 0 0 0-.48-.48H8.4a.48.48 0 0 0-.48.48z" />
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-1.92 0c0 5.567-4.513 10.08-10.08 10.08S1.92 17.567 1.92 12 6.433 1.92 12 1.92 22.08 6.433 22.08 12z"
         />
      </svg>
   );
};
