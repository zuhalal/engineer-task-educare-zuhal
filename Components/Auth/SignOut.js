import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { auth } from "../../pages/_app";

function SignOut() {
  return (
    <>
      {auth.currentUser ? (
        <button
          onClick={() => auth.signOut()}
          className=" p-2 border-2 shadow-md text-white rounded-md flex gap-2 items-center"
          style={{ backgroundColor: "#4285F4", borderColor: "#4285F4" }}
        > 
          <FontAwesomeIcon icon={faSignOutAlt} width="20px" />
          Sign Out
        </button>
      ) : null}
    </>
  );
}

export default SignOut;
