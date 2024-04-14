import React from "react";
import ReactDOM from "react-dom/client";
import RouterProvider from "@pages/RouterProvider";
import AOS from "aos";

import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import "./index.css";

AOS.init({
   disable: "mobile",
});

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider />
   </React.StrictMode>
);
