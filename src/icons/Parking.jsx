export default ({ className = "w-full h-full" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 48 48"
         className={`${className} fill-current`}
      >
         <path d="M24 47.5C11 47.5.5 37 .5 24S11 .5 24 .5 47.5 11 47.5 24 37 47.5 24 47.5zm0-43.1C13.2 4.4 4.4 13.2 4.4 24S13.2 43.6 24 43.6 43.6 34.8 43.6 24 34.8 4.4 24 4.4z" />
         <path d="M31.3 15.9c1.3 1.1 1.9 2.8 1.9 5.1s-.7 3.9-2 5-3.4 1.6-6.1 1.6h-2.5v6.2c0 1.1-.9 2.1-2.1 2.1-1.1 0-2.1-.9-2.1-2.1V16.1c0-1.1.9-1.9 1.9-1.9h4.6c3.1 0 5.2.6 6.4 1.7zm-3 7.2c.5-.6.7-1.4.7-2.4s-.3-1.8-1-2.3c-.6-.4-1.6-.7-3-.7h-2.4V24h2.8c1.5 0 2.4-.3 2.9-.9z" />
      </svg>
   );
};