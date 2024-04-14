export default ({ className = "w-5 h-5" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 512 512"
         className={`${className} fill-current`}
      >
         <path d="M497 361h-15v-15c0-60.1-23.404-116.602-65.901-159.099-32.687-32.687-73.664-54.063-118.186-62.197A44.71 44.71 0 0 0 302 106c0-24.813-20.187-45-45-45s-45 20.187-45 45a44.734 44.734 0 0 0 4.078 18.684c-44.707 8.114-86.003 29.474-119.107 62.148C53.784 229.458 30 285.984 30 346v15H15c-8.284 0-15 6.716-15 15 0 41.355 33.645 75 75 75h362c41.355 0 75-33.645 75-75 0-8.284-6.716-15-15-15zM257 91c8.271 0 15 6.729 15 15s-6.729 15-15 15-15-6.729-15-15 6.729-15 15-15zM60 346c0-107.523 88.374-195.2 197-195.2 107.523 0 195 87.677 195 195.2v15H60v-15zm377 75H75c-19.557 0-36.239-12.739-42.43-30.2h446.859C473.239 408.261 456.557 421 437 421z" />
      </svg>
   );
};
