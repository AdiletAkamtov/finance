import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react"
import { auth } from "../firebase/config";



export const useLogin = () => {
  cosnt [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false)

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)

    try{
      await signInWithEmailAndPassword(auth,email, password);;

      if(!isCancelled){
        setIsPending(false)
        setError(null)
      }
    } catch (err) {
        if(!isCancelled){
          setIsPending(false)
          setError(null)
        }
      }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  } []);

  return {login,isPending,error}
}