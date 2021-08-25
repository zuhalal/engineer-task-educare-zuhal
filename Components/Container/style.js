import styled from "styled-components";

export const LoginWrapper = styled.div.attrs({
  className:
    "lg:p-5 p-3 h-full flex flex-col justify-center items-center w-1/2 bg-white",
})``;

export const ChatroomWrapper = styled.div.attrs({
  className:
    "lg:px-52 my-12 py-5 px-5 w-full",
})`

`;

export const ChatroomBorderWrapper = styled.div.attrs({
  className:
    "p-6 overflow-y-auto"
})`
  background-color:#F5F5F5;
  border-radius: 8px;
  max-height: 600px;
  width: 800px;
`;
