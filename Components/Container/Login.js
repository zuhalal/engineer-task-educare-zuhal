import React, { useState, useEffect } from "react";
import { H2, H3, P1, P2 } from "../../styles/typography";
import SignIn from "../Auth/SignIn";
import { LoginWrapper } from "./style";

function Login() {
  return (
    <div className="flex lg:flex-row flex-col w-screen h-screen">
      <div className="lg:w-1/2 h-full flex flex-col gap-3 justify-center items-center">
        <H3 className="font-bold lg:hidden flex" style={{ color: "white" }}>
          CHATROOM APP
        </H3>
        <H2 className="font-bold lg:flex hidden" style={{ color: "white" }}>
          CHATROOM APP
        </H2>
        <P1 style={{ color: "white" }} className="lg:flex hidden">
          A Chatroom App build using Next Js and Firebase
        </P1>
        <P2 style={{ color: "white", textAlign:"center" }} className="lg:hidden flex">
          A Chatroom App build using Next Js and Firebase
        </P2>
      </div>
      <LoginWrapper>
        <div className="mb-6 font-bold">
          <H3>LET'S GET STARTED</H3>
        </div>
        <div className="w-max flex justify-center">
          <SignIn />
        </div>
      </LoginWrapper>
    </div>
  );
}

export default Login;
