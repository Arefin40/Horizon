export default ({ className = "w-5 h-5" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={`${className} stroke-current`}
      >
         <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M12.472 7.69H7.69v-.68c0-1.131.929-2.049 2.075-2.049h.632c1.146 0 2.075.918 2.075 2.05zm-1.01 2.38.002 1.151M8.7 10.071l-.002 1.15m-3.845 2.274v-8.57c0-1.425 1.17-2.58 2.614-2.58h0c1.444 0 2.614 1.155 2.614 2.58v.037M.603 13.495h22.792m-21.875 0 .784 3.646c.431 2.006 2.225 3.44 4.302 3.44h10.787c2.077 0 3.87-1.434 4.301-3.44l.784-3.646zm18.081 6.75.814 1.41m-16.017-1.41-.814 1.41"
         />
      </svg>
   );
};
