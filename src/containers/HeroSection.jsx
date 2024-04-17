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
         pagination={{ clickable: true }}
         autoplay
         className="mt-4 lg:mt-8 w-full max-w-full max-h-[40rem] sm:max-h-[36rem] overflow-hidden rounded-md"
      >
         <SwiperSlide className="p-5 md:p-8 flex lg:grid lg:grid-cols-2 flex-col lg:flex-row gap-y-6 lg:items-center xl:flex bg-gradient-to-b from-primary-50 to-amber-50 xl:from-white xl:to-white">
            <div className="xl:p-12 xl:absolute xl:inset-0 xl:bottom-24 grid justify-items-center lg:justify-items-start text-center lg:text-left xl:bg-gradient-to-br from-primary-50 to-amber-50 xl:rounded-md content-center">
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
               className="relative ml-auto max-h-full max-w-full"
            />
         </SwiperSlide>

         <SwiperSlide className="relative flex flex-col h-full text-center">
            <img
               src="https://i.ibb.co/qjv5fd3/2203920988.jpg"
               className="w-full h-full max-h-[50%] sm:max-h-none object-cover"
            />
            <div className="sm:absolute inset-0 sm:bg-gradient-to-b from-black/30 to-black/40 sm:text-white flex items-center justify-center">
               <h1 className="py-3 md:py-0 my-automd:my-0 text-2xl sm:text-5xl lg:text-7xl xl:text-8xl text-rose-700 sm:text-white font-serif">
                  Colonial Villas
               </h1>
            </div>
            <img
               src="https://i.ibb.co/x23W3yK/2131328580.jpg"
               className="sm:hidden max-h-[50%] object-cover"
            />
         </SwiperSlide>

         <SwiperSlide className="flex flex-col gap-y-6 text-center">
            <img
               src="https://i.ibb.co/BNRDzdV/9205868032.jpg"
               className="h-full lg:h-auto rounded-md object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40 text-white flex items-center justify-center">
               <h1 className="text-5xl lg:text-7xl xl:text-8xl font-serif">
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
               <h1 className="text-5xl lg:text-7xl xl:text-8xl font-serif">
                  Resorts
               </h1>
            </div>
         </SwiperSlide>
      </Swiper>
   );
};
