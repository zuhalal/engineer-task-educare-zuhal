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
      className="w-full p-2 border-2 border-blueGoogle shadow-md text-white bg-blueGoogle rounded-md flex gap-2 items-center hover:bg-white hover:text-blueGoogle"
    >
      <FontAwesomeIcon icon={faGoogle} width="20px" />
      <p className="h-full flex items-center">Sign In With Google</p>
    </button>
  );
}

export default SignIn;
