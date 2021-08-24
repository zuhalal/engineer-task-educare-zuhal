import React from "react";
import { auth } from "../../pages/_app";
import firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <button
      onClick={signInWithGoogle}
      className="w-full p-2 border-2 shadow-md text-white rounded-md flex gap-2 items-center"
      style={{backgroundColor:"#4285F4", borderColor:"#4285F4"}}
    >
      <FontAwesomeIcon icon={faGoogle} />
      <p className="h-full flex items-center">Sign In With Google</p>
    </button>
  );
}

export default SignIn;
