export default ({ className = "w-5 h-5" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={`bookmark-icon ${className} stroke-current fill-none origin-center transition-all`}
      >
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6.477 1a3.395 3.395 0 0 0-3.315 3.464V20.71a2.302 2.302 0 0 0 1.337 2.102 2.207 2.207 0 0 0 2.33-.386L12 17.71l5.172 4.716c.393.366.909.57 1.446.574.304-.002.605-.066.884-.188a2.302 2.302 0 0 0 1.337-2.102V4.464A3.395 3.395 0 0 0 17.523 1z"
         />
      </svg>
   );
};
