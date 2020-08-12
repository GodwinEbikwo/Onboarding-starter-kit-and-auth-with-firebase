import * as firebase from "firebase";
import "firebase/auth";
import config from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

interface authProps {
  email: string;
  password: string | number | any;
}

export const auth = firebase.auth();

export const loginWithEmail = ({ email, password }: authProps) =>
  auth.signInWithEmailAndPassword(email, password);

export const registerWithEmail = ({ email, password }: authProps) =>
  auth.createUserWithEmailAndPassword(email, password);

export const logout = () => auth.signOut();

export const passwordReset = ({ email }: authProps) =>
  auth.sendPasswordResetEmail(email);
