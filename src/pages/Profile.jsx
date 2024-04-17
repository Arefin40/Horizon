import { useForm } from "react-hook-form";
import { useAuth } from "@contexts/AuthContext";
import { Input } from "@components/Form";
import Button from "@components/Button";

export default () => {
   document.title = "Horizon  |  Profile";
   const { currentUser, updateUserProfile } = useAuth();

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isDirty },
   } = useForm({
      defaultValues: {
         displayName: currentUser?.displayName || "",
         photoURL: currentUser?.photoURL || "",
      },
   });

   const resetForm = (user) => {
      reset({
         displayName: user?.displayName || "",
         photoURL: user?.photoURL || "",
      });
   };

   return (
      <section className="p-4 lg:p-8">
         <main className="max-w-screen-md mx-auto grid gap-y-8 sm:gap-y-12">
            <div className="text-center">
               <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-800">
                  Profile
               </h2>
               <p className="mt-2 leading-8 text-gray-600">
                  Update your photo and details here
               </p>
            </div>

            <form
               className="w-full grid gap-y-8 sm:gap-y-12"
               onSubmit={handleSubmit((data) =>
                  updateUserProfile(data, resetForm)
               )}
            >
               <div>
                  <div>
                     <h3 className="text-base font-semibold leading-7 text-gray-900">
                        Personal Information
                     </h3>
                     <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                        Personal info and options to manage it.
                     </p>
                  </div>
                  <div className="mt-6 border-t border-gray-100">
                     <div className="divide-y divide-gray-100">
                        <div className="py-6 grid sm:grid-cols-3 gap-y-1 sm:gap-4 sm:px-0 sm:items-center">
                           <label
                              htmlFor="name"
                              className="text-sm font-medium leading-6 text-gray-900"
                           >
                              Full name
                           </label>
                           <Input
                              type="text"
                              placeholder="Enter your name"
                              className="sm:col-span-2"
                              spellCheck={false}
                              errors={errors}
                              {...register("displayName", {
                                 required: "Name is required",
                              })}
                           />
                        </div>
                        <div className="py-6 grid sm:grid-cols-3 gap-y-1 sm:gap-4 sm:px-0 sm:items-center">
                           <label
                              htmlFor="photoUrl"
                              className="text-sm font-medium leading-6 text-gray-900"
                           >
                              Photo url
                           </label>

                           <Input
                              type="url"
                              placeholder="Enter your photo url"
                              className="sm:col-span-2"
                              errors={errors}
                              {...register("photoURL", {
                                 required: "Photo url is required",
                              })}
                           />
                        </div>
                        <div className="py-6 grid sm:grid-cols-3 gap-y-1 sm:gap-4 sm:px-0 sm:items-center">
                           <label className="text-sm font-medium leading-6 text-gray-900">
                              Email address
                           </label>
                           <Input
                              type="text"
                              name="email"
                              disabled
                              hideBorder
                              value={currentUser?.email || "* * * * * * * *"}
                              className="sm:col-span-2"
                           />
                        </div>
                     </div>
                  </div>
               </div>

               <div>
                  <div>
                     <h3 className="text-base font-semibold leading-7 text-gray-900">
                        Security
                     </h3>
                     <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                        A secure password helps protect your account.
                     </p>
                  </div>
                  <div className="mt-6 border-t border-gray-100">
                     <div className="divide-y divide-gray-100">
                        <div className="py-6 grid sm:grid-cols-3 gap-y-1 sm:gap-4 sm:px-0 sm:items-center">
                           <label className="text-sm font-medium leading-6 text-gray-900">
                              Password
                           </label>
                           <p className="p-3 mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 tracking-wider">
                              * * * * * * * *
                           </p>
                        </div>
                     </div>

                     <div
                        className={`py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 sm:items-center transition-all ${
                           isDirty
                              ? "visible opacity-100 scale-100"
                              : "invisible opacity-0 pointer-events-none scale-90"
                        }`}
                     >
                        <Button
                           type="submit"
                           color="primary"
                           disabled={!isDirty}
                           className="w-full max-w-64 mx-auto sm:w-auto sm:col-start-2"
                        >
                           Save Changes
                        </Button>
                     </div>
                  </div>
               </div>
            </form>
         </main>
      </section>
   );
};
