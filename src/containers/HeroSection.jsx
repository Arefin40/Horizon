import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import RightArrow from "@icons/RightArrow";

export default ({ estateSectionRef }) => {
   const scrollEstateSectionIntoView = () => {
      estateSectionRef.current.scrollIntoView({ behavior: "smooth" });
   };

   return (
      <Swiper
         modules={[Autoplay, Pagination]}
         pagination
         autoplay
         className="mt-4 lg:mt-8 max-w-full lg:h-[36rem] overflow-hidden rounded-md"
      >
         <SwiperSlide className="p-5 lg:px-12 py-6 flex flex-col lg:flex-row gap-y-10 items-center content-center lg:justify-end bg-gradient-to-b from-primary-50 to-amber-50 lg:from-white lg:to-white">
            <div className="lg:p-12 lg:absolute inset-0 lg:bottom-24 lg:bg-gradient-to-br from-primary-50 to-amber-50 grid content-center text-center lg:text-left lg:rounded-md">
               <p className="text-xl lg:text-2xl font-medium text-primary-600">
                  Find your luxurious dream
               </p>
               <h1 className="mt-4 text-4xl lg:text-6xl font-extrabold text-primary-600">
                  Property
               </h1>
               <p className="mt-5 lg:mt-8 max-w-md text-sm lg:text-lg">
                  Find a luxury residence that suits you, we will help you to
                  find the most suitable residence for you
               </p>
               <button
                  onClick={scrollEstateSectionIntoView}
                  className="justify-self-center lg:justify-self-start flex items-center gap-x-2 flex-shrink-0 min-w-24 mt-6 px-4 py-2 border border-primary-500 rounded-full text-primary-600 hover:bg-primary-500 hover:text-white transition-all active:scale-95"
               >
                  <span>Explore</span>
                  <RightArrow />
               </button>
            </div>
            <img
               src="https://i.ibb.co/DY38653/2694782767.png"
               className="relative w-full lg:w-auto lg:h-full max-w-full max-h-full object-bottom"
            />
         </SwiperSlide>

         <SwiperSlide className="relative flex flex-col">
            <img src="https://i.ibb.co/qjv5fd3/2203920988.jpg" />
            <div className="my-auto lg:absolute inset-0 lg:bg-gradient-to-b from-black/30 to-black/40 lg:text-white flex items-center justify-center">
               <h1 className="my-3 lg:my-0 text-2xl lg:text-8xl lg:shadow-xl bg-clip-text text-center text-rose-700 lg:text-white font-serif">
                  Colonial Villas
               </h1>
            </div>
            <img
               src="https://i.ibb.co/x23W3yK/2131328580.jpg"
               className="lg:hidden"
            />
         </SwiperSlide>

         <SwiperSlide className="flex flex-col gap-y-6 text-center">
            <img
               src="https://i.ibb.co/BNRDzdV/9205868032.jpg"
               className="h-full lg:h-auto rounded-md object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40 text-white flex items-center justify-center">
               <h1 className="text-5xl lg:text-8xl font-extralight font-serif">
                  Luxury Penthouse
               </h1>
            </div>
         </SwiperSlide>

         <SwiperSlide className="flex flex-col gap-y-6 text-center">
            <img
               src="https://i.ibb.co/0qDtrHB/8178050689.jpg"
               className="h-full lg:h-auto rounded-md object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40 text-white flex items-center justify-center">
               <h1 className="text-5xl lg:text-8xl font-extralight font-serif">
                  Resorts
               </h1>
            </div>
         </SwiperSlide>
      </Swiper>
   );
};
