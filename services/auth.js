import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const register = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log(cred);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
