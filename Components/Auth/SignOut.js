import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { auth } from "../../pages/_app";
import SecondaryButton from "../Elements/Buttons/SecondaryButton";
import { useToast } from "@chakra-ui/react";

function SignOut() {
  const toast = useToast();

  return (
    <>
      {auth.currentUser ? (
        <SecondaryButton
          onClick={() => {
            try {
              auth.signOut().then(() =>
                toast({
                  title: "Logout Successful",
                  description: "",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                })
              );
            } catch (error) {
              toast({
                title: "Logout Failed",
                description: "",
                status: "failed",
                duration: 3000,
                isClosable: true,
              });
            }
          }}
        >
          <FontAwesomeIcon icon={faSignOutAlt} width="20px" />
          Sign Out
        </SecondaryButton>
      ) : null}
    </>
  );
}

export default SignOut;
