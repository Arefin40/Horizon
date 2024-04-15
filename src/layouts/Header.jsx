import { NavLink } from "react-router-dom";
import { useBoolean } from "@hooks";
import { Menu, LogOut } from "@icons";
import { useAuth } from "@contexts/AuthContext";
import Drawer from "@components/Drawer";
import Button from "@components/Button";
import BrandLogo from "@containers/BrandLogo";
import UserCard from "@containers/UserCard";
import Tooltip from "@components/Tooltip";
import Avatar from "@components/Avatar";

const navigations = [
   {
      path: "/",
      title: "Home",
   },
   {
      path: "/saved-properties",
      title: "Saved Properties",
   },
   {
      path: "/contact",
      title: "Contact us",
   },
];

export default () => {
   const { currentUser, signOut } = useAuth();
   const { active, open, close } = useBoolean(false);

   return (
      <header className="w-full fixed inset-x-0 top-0 lg:static z-10 border-b sm:border-0">
         <section className="px-5 lg:px-0 h-16 lg:h-auto lg:py-8 mx-auto container flex items-center justify-between bg-white">
            <BrandLogo className="max-w-52" />

            <Drawer
               open={active}
               onClose={close}
               className="top-16 lg:static flex flex-col lg:flex-row lg:items-center lg:justify-center lg:w-full lg:max-w-none lg:translate-x-0 border-t lg:border-0"
            >
               <ul className="p-6 lg:p-0 text-base grid lg:flex lg:justify-center items-center gap-x-12 gap-y-6 font-medium text-gray-700">
                  {navigations.map(({ path, title }) => (
                     <NavLink
                        to={path}
                        key={path}
                        onClick={close}
                        className={({ isActive }) =>
                           isActive ? "text-primary-500" : ""
                        }
                     >
                        {title}
                     </NavLink>
                  ))}
               </ul>

               <div className="m-2 mb-5 mt-auto rounded-lg lg:hidden">
                  {currentUser ? (
                     <UserCard className="w-full text-sm" />
                  ) : (
                     <Button
                        to="/login"
                        color="primary"
                        size="large"
                        className="w-full"
                     >
                        Login
                     </Button>
                  )}
               </div>
            </Drawer>

            <div className="w-full max-w-52 flex items-center justify-end">
               <div className="hidden lg:block">
                  {currentUser ? (
                     <div className="flex items-center gap-x-4">
                        <Tooltip
                           title={currentUser?.displayName}
                           position="bottom"
                        >
                           <Avatar
                              size="w-10 h-10"
                              className="rounded-full font-semibold bg-primary-500 text-white border"
                              src={currentUser?.photoURL}
                              alt={currentUser?.displayName}
                           />
                        </Tooltip>

                        <Tooltip title="Log out" position="bottom">
                           <button
                              onClick={signOut}
                              className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full overflow-hidden group"
                           >
                              <LogOut className="w-5 h-5 text-gray-600 group-hover:text-gray-700" />
                           </button>
                        </Tooltip>
                     </div>
                  ) : (
                     <Button
                        to="/login"
                        color="primary"
                        className="min-w-24 w-full"
                     >
                        Login
                     </Button>
                  )}
               </div>
               <button onClick={open} className="lg:hidden">
                  <Menu />
               </button>
            </div>
         </section>
      </header>
   );
};
