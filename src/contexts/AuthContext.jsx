import { createContext, useContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   updateProfile,
   signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

export const useAuth = () => {
   return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState(null);

   const createAccount = async (
      { displayName, photoURL, email, password },
      callbackFunction
   ) => {
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

   const logOut = async () => {
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
      });
      return unsubscribe;
   }, []);

   const values = {
      currentUser,
      createAccount,
      signOut: logOut,
   };

   return (
      <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
   );
};
