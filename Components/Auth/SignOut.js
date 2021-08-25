import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { auth } from "../../pages/_app";
import SecondaryButton from "../Elements/Buttons/SecondaryButton";

function SignOut() {
  return (
    <>
      {auth.currentUser ? (
        <SecondaryButton
          onClick={() => auth.signOut()}
        >
          <FontAwesomeIcon icon={faSignOutAlt} width="20px" />
          Sign Out
        </SecondaryButton>
      ) : null}
    </>
  );
}

export default SignOut;
