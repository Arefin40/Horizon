import { createContext, useContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   GithubAuthProvider,
   GoogleAuthProvider,
   FacebookAuthProvider,
   signInWithEmailAndPassword,
   signInWithPopup,
   updateProfile,
   signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

export const useAuth = () => {
   return useContext(AuthContext);
};

const formattedErrorMessage = (errorMessage) => {
   const regEx = /auth\/([a-z-]+)/;
   const message = errorMessage.match(regEx)?.[1];
   return message
      ? message.charAt(0).toUpperCase() + message.slice(1).split("-").join(" ")
      : errorMessage;
};

const providers = {
   google: new GoogleAuthProvider(),
   github: new GithubAuthProvider(),
   facebook: new FacebookAuthProvider(),
};

export const AuthProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState(null);
   const [isAuthenticating, setIsAuthenticating] = useState(true);

   const createAccount = async (
      { displayName, photoURL, email, password },
      callbackFunction
   ) => {
      setIsAuthenticating(true);
      try {
         //prettier-ignore
         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
         await updateProfile(userCredential.user, { displayName, photoURL });
         toast.success("Account created successfully");
         if (callbackFunction) callbackFunction();
      } catch (error) {
         console.error(error);
      }
   };

   const updateUserProfile = async ({ displayName, photoURL }) => {
      setIsAuthenticating(true);
      try {
         await updateProfile(currentUser, { displayName, photoURL });
         location.reload();
         toast.success("Profile updated successfully");
      } catch (error) {
         toast.error(formattedErrorMessage(error.message));
      }
   };

   const signInWithProvider = (authProvider, callbackFunction) => async (e) => {
      e.preventDefault();
      setIsAuthenticating(true);

      try {
         await signInWithPopup(auth, providers[authProvider]);
         if (callbackFunction) callbackFunction();
         setTimeout(() => toast.success("Signed in successfully"), 1000);
      } catch (error) {
         toast.error(formattedErrorMessage(error.message));
         console.error(error);
      }
   };

   const logIn = async ({ email, password }, callbackFunction) => {
      setIsAuthenticating(true);
      try {
         await signInWithEmailAndPassword(auth, email, password);
         toast.success("Signed-in successfully");
         if (callbackFunction) callbackFunction();
      } catch (error) {
         console.error(error);
      }
   };

   const logOut = async () => {
      setIsAuthenticating(true);
      try {
         await signOut(auth);
         toast.success("Signed-out successfully");
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
         setCurrentUser(user);
         setIsAuthenticating(false);
      });
      return unsubscribe;
   }, []);

   const values = {
      currentUser,
      isAuthenticating,
      createAccount,
      updateUserProfile,
      signInWithProvider,
      signInWithEmail: logIn,
      signOut: logOut,
   };

   return (
      <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
   );
};
