import React from "react";
import { auth } from "../../pages/_app";
import firebase from "firebase";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <button
      onClick={signInWithGoogle}
      className="w-full p-2 border-2 shadow-md text-white rounded-md"
      style={{backgroundColor:"#4285F4", borderColor:"#4285F4"}}
    >
      Sign In With Google
    </button>
  );
}

export default SignIn;
