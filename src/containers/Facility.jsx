import {
   Guestroom,
   Spa,
   Tennis,
   Campfire,
   WiFi,
   Library,
   Fitness,
   Swimming,
   Parking,
   Helipad,
   GolfCourse,
   Playground,
   RoomService,
   Terrace,
   Beach,
} from "@icons";

const facilities = {
   wifi: { icon: <WiFi />, name: "Free Wi-Fi" },
   library: { icon: <Library />, name: "Grand library" },
   fitness: { icon: <Fitness />, name: "Fitness centre" },
   pool: { icon: <Swimming />, name: "Private pool" },
   tennis: { icon: <Tennis />, name: "Tennis court" },
   spa: { icon: <Spa />, name: "Spa & wellness centre" },
   parking: { icon: <Parking />, name: "Parking area" },
   guestroom: { icon: <Guestroom />, name: "Guestroom" },
   helipad: { icon: <Helipad />, name: "Helipad" },
   terrace: { icon: <Terrace />, name: "Terrace" },
   "private-beach-access": { icon: <Beach />, name: "Private Beach Access" },
   "kids-playground": { icon: <Playground />, name: "Kids playground" },
   "room-service": { icon: <RoomService />, name: "Room service" },
   "golf-course": { icon: <GolfCourse />, name: "Golf course" },
   "outdoor-kitchen": { icon: <Campfire />, name: "Outdoor kitchen" },
};

export default ({ type }) => {
   if (facilities[type] === undefined) return;

   return (
      <div className="flex items-center gap-x-3">
         <div className="text-primary-500 w-5 h-5">{facilities[type].icon}</div>
         <span className="inline-block whitespace-nowrap">
            {facilities[type].name}
         </span>
      </div>
   );
};
