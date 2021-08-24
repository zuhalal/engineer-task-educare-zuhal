import React from "react";
import { auth } from "../../pages/_app";

function SignOut() {
  return (
    <>
      {auth.currentUser ? (
        <button
          onClick={() => auth.signOut()}
          className="w-full p-2 border-2 shadow-md text-white rounded-md"
          style={{ backgroundColor: "#4285F4", borderColor: "#4285F4" }}
        >
          Sign Out
        </button>
      ) : null}
    </>
  );
}

export default SignOut;
