import React from "react";
import { auth } from "../../pages/_app";
import firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import PrimaryButton from "../Elements/Buttons/PrimaryButton";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <PrimaryButton
      onClick={signInWithGoogle}
      additionalStyle="w-max"
    >
      <FontAwesomeIcon icon={faGoogle} width="20px" />
      <p className="h-full flex items-center">Sign In With Google</p>
    </PrimaryButton>
  );
}

export default SignIn;
