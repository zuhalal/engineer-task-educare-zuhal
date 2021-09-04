import React from "react";
import { auth } from "../../pages/_app";
import firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import PrimaryButton from "../Elements/Buttons/PrimaryButton";
import { useToast } from "@chakra-ui/react";

function SignIn() {
  const toast = useToast();

  const signInWithGoogle = () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).then(() =>
        toast({
          title: "Login Successful",
          description: "",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      );
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    }
    
  };

  return (
    <PrimaryButton onClick={signInWithGoogle} additionalStyle="w-max">
      <FontAwesomeIcon icon={faGoogle} width="20px" />
      <p className="h-full flex items-center">Sign In With Google</p>
    </PrimaryButton>
  );
}

export default SignIn;
