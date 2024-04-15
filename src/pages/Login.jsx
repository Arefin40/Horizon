import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "@contexts/AuthContext";
import { HorizonLogo, Lock, Mail, Github, Google, Facebook } from "@icons";
import { Input, PasswordToggler } from "@components/Form";
import Button from "@components/Button";
import {
   getEmailValidationSchema,
   getPasswordValidationSchema,
} from "@utils/ValidationSchema";

export default () => {
   document.title = "Horizon  |  Sign in";
   const { signInWithEmail, signInWithProvider } = useAuth();
   const [showPassword, setShowPassword] = useState(false);
   const location = useLocation();
   const nevigate = useNavigate();

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
   } = useForm();

   const redirect = () => {
      nevigate(location.state || "/");
   };

   return (
      <section className="w-full relative rounded-xl z-10">
         <Link to="/" className="flex items-center justify-center gap-x-2">
            <HorizonLogo className="w-10 h-10" />
            <h1 className="ml-2 font-extrabold text-2xl lg:text-4xl first-letter:text-primary-500 text-primary-700">
               Horizon
            </h1>
         </Link>

         <div data-aos="zoom-out-up" className="mt-5 lg:flex justify-center">
            {/* Login Form */}
            <div className="p-8 mx-auto lg:mx-0 w-full max-w-lg bg-white rounded-t-lg lg:rounded-none lg:rounded-l-xl">
               <div className="mb-8 sm:mb-12 text-center">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-800">
                     Login
                  </h2>
                  <p className="mt-2 leading-8 text-gray-600">
                     Please enter your details to sign in
                  </p>
               </div>

               <form
                  className="grid gap-y-6 w-full"
                  onSubmit={handleSubmit((data) =>
                     signInWithEmail(data, redirect)
                  )}
               >
                  <Input
                     label="Email"
                     type="email"
                     placeholder="Enter your email"
                     startIcon={<Mail />}
                     errors={errors}
                     {...register(
                        "email",
                        getEmailValidationSchema({ required: true })
                     )}
                  />
                  <Input
                     label="Password"
                     type={showPassword ? "text" : "password"}
                     startIcon={<Lock />}
                     endIcon={
                        <PasswordToggler
                           showPassword={showPassword}
                           setShowPassword={setShowPassword}
                        />
                     }
                     placeholder="Enter your password"
                     errors={errors}
                     {...register(
                        "password",
                        getPasswordValidationSchema({ required: true })
                     )}
                  />

                  <div className="flex items-center justify-center text-sm">
                     <span>Don't have an account?</span>
                     <Link
                        to="/register"
                        className="ml-1 font-semibold text-primary-500"
                     >
                        Create one
                     </Link>
                     .
                  </div>

                  <Button type="submit" color="primary">
                     Sign in
                  </Button>
               </form>
            </div>

            {/* Singin with Google, Facebook, Github */}
            <div className="p-8 mx-auto lg:mx-0 w-full max-w-lg lg:max-w-80 flex items-center justify-center backdrop-filter backdrop-blur-md bg-opacity-65 bg-white rounded-b-lg lg:rounded-none lg:rounded-r-xl">
               <div className="grid gap-y-4 gap-x-8">
                  <Button
                     startIcon={<Google />}
                     variant="outlined"
                     color="hover:bg-white text-gray-600 backdrop-filter backdrop-blur-md bg-opacity-65 bg-white rounded-r-xl"
                     onClick={signInWithProvider("google", redirect)}
                  >
                     Sign in with Google
                  </Button>
                  <Button
                     startIcon={<Facebook className="w-5 h-5 text-[#1877F2]" />}
                     variant="outlined"
                     color="hover:bg-white text-gray-600 backdrop-filter backdrop-blur-md bg-opacity-65 bg-white rounded-r-xl"
                     onClick={signInWithProvider("facebook", redirect)}
                  >
                     Sign in with Facebook
                  </Button>
                  <Button
                     startIcon={<Github className="w-5 h-5 text-[#171515]" />}
                     variant="outlined"
                     color="hover:bg-white text-gray-600 backdrop-filter backdrop-blur-md bg-opacity-65 bg-white rounded-r-xl"
                     onClick={signInWithProvider("github", redirect)}
                  >
                     Sign in with Github
                  </Button>
               </div>
            </div>
         </div>
      </section>
   );
};
