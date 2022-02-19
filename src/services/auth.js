import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const register = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log(cred);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password).then(() =>
    console.log("logged in")
  );
};

export const logout = () => {
  signOut(auth).then(() => console.log("logout"));
};
