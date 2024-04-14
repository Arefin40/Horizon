import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "@contexts/AuthContext";
import { Input, PasswordToggler } from "@components/Form";
import Button from "@components/Button";
import HorizonLogo from "@icons/HorizonLogo";
import {
   getEmailValidationSchema,
   getPasswordValidationSchema,
} from "@utils/ValidationSchema";

export default () => {
   document.title = "Horizon  |  Sign up";
   const [showPassword, setShowPassword] = useState(false);
   const { createAccount } = useAuth();
   const nevigate = useNavigate();
   const redirect = () => nevigate("/");

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: { displayName: "", photoURL: "", email: "", password: "" },
   });

   return (
      <section className="relative grid gap-y-5 rounded-xl z-10 w-full">
         <Link to="/" className="flex items-center justify-center gap-x-2">
            <HorizonLogo className="w-10 h-10" />
            <h1 className="ml-2 font-extrabold text-2xl lg:text-4xl first-letter:text-primary-500 text-primary-700">
               Horizon
            </h1>
         </Link>

         <div
            data-aos="zoom-out-up"
            className="relative p-8 mx-auto max-w-lg w-full bg-white rounded-xl z-10 flex-shrink-0"
         >
            <div className="mb-8 sm:mb-12 text-center">
               <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-800">
                  Register
               </h2>
               <p className="mt-2 leading-8 text-gray-600">
                  Please enter your details to register
               </p>
            </div>

            <form
               className="grid gap-y-6"
               onSubmit={handleSubmit((data) => createAccount(data, redirect))}
            >
               <Input
                  label="Full name"
                  type="text"
                  placeholder="Enter your name"
                  errors={errors}
                  {...register("displayName", { required: "Name is required" })}
               />
               <Input
                  label="Photo url"
                  type="url"
                  placeholder="Enter your photo url"
                  errors={errors}
                  {...register("photoURL", {
                     required: "Photo url is required",
                  })}
               />
               <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  errors={errors}
                  {...register(
                     "email",
                     getEmailValidationSchema({ required: true })
                  )}
               />

               <div className="relative w-full grid gap-y-1">
                  <Input
                     label="Password"
                     type={showPassword ? "text" : "password"}
                     endIcon={
                        <PasswordToggler
                           {...{ showPassword, setShowPassword }}
                        />
                     }
                     placeholder="Enter your password"
                     className="peer"
                     errors={errors}
                     {...register(
                        "password",
                        getPasswordValidationSchema({ required: true })
                     )}
                  />

                  <div className="p-4 hidden peer-focus-within:grid text-sm bg-white rounded-md shadow-md border whitespace-nowrap gap-y-1 tooltip">
                     <h3 className="text-gray-600 font-medium">
                        Password must contain (at least):
                     </h3>
                     <ul className="grid gap-y-0.5">
                        <li>⏺ 6 characters.</li>
                        <li>⏺ one capital letter.</li>
                        <li>⏺ one small letter.</li>
                     </ul>
                  </div>
               </div>

               <div className="flex items-center justify-center text-sm">
                  <span>Already have an account?</span>
                  <Link
                     to="/login"
                     className="ml-1 font-semibold text-primary-500"
                  >
                     Sign in
                  </Link>
                  .
               </div>

               <Button type="submit" color="primary">
                  Create an account
               </Button>
            </form>
         </div>
      </section>
   );
};
