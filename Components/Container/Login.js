import React from "react";
import { H2, H3, P1 } from "../../styles/typography";
import SignIn from "../Auth/SignIn";
import { LoginWrapper } from "./style";

function Login() {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 h-full flex flex-col gap-3 justify-center items-center">
        <H2 className="font-bold" style={{color:"white"}}>CHATROOM APP</H2>
        <P1 style={{color:"white"}}>A Chatroom App build using Next Js and Firebase</P1>
      </div>
      <LoginWrapper>
        <div className="mb-6 font-bold">
          <H3>LET'S GET STARTED</H3>
        </div>
        <div className="w-max">
          <SignIn />
        </div>
      </LoginWrapper>
    </div>
  );
}

export default Login;
