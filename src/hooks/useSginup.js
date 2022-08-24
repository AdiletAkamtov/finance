import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";

export const useSginup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false)

  const siginup = async (email, password, name) => {
    setError(null);
    setIsPending(true);


    try{
      const response = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password
        );
        await updateProfile(response.user,{
          displayName: name,
        });
        setIsPending(false);
        setError(null)
    }   catch (error) {
        console.log(error.message);
        setError(error.message)
        setIsPending(false);
    }
  }
  return { siginup, error , isPending }
};