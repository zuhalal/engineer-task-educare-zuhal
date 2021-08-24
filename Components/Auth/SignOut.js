import React from "react";
import { auth } from "../../pages/_app";

function SignOut() {
  return (
    <>
      {auth.currentUser ? (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      ) : null}
    </>
  );
}

export default SignOut;
