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
          className=" p-2 border-2 border-white bg-white hover:border-blueGoogle hover:bg-blueGoogle shadow-md rounded-md text-blueGoogle hover:text-white flex gap-2 items-center"
        >
          <FontAwesomeIcon icon={faSignOutAlt} width="20px" />
          Sign Out
        </button>
      ) : null}
    </>
  );
}

export default SignOut;
