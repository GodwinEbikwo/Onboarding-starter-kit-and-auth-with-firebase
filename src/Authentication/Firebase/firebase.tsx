import * as firebase from "firebase";
import "firebase/auth";
import config from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

interface authProps {
  email: undefined;
  password: undefined;
}

export const auth = firebase.auth();

export const loginWithEmail = (email: string, password: string) => {
  auth.signInWithEmailAndPassword(email, password);
};

export const registerWithEmail = (email: string, password: string) => {
  auth.createUserWithEmailAndPassword(email, password);
};

export const logout = () => auth.signOut();

export const passwordReset = (email: string) => {
  auth.sendPasswordResetEmail(email);
};
