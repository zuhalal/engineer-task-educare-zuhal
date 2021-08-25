import styled from "styled-components";

export const LoginWrapper = styled.div.attrs({
  className:
    "lg:p-5 p-3 h-full flex flex-col justify-center items-center w-1/2 bg-white",
})``;

export const ChatroomWrapper = styled.div.attrs({
  className: "lg:px-52 my-12 py-5 px-5 w-full",
})``;

export const ChatroomBorderWrapper = styled.div.attrs({
  className: "p-6 overflow-y-auto",
})`
  background-color: #f5f5f5;
  border-radius: 8px;
  max-height: 600px;
  width: 800px;
`;

export const ChatWrapper = styled.div.attrs({
  className:
    "border-blue-400 rounded-md h-auto p-2 bg-blue-400 text-white flex flex-col gap-1 items-center",
})`

  .chat {
    word-break: break-word;
  }

  min-width: 208px;
  max-width: 300px;
`;

export const TextAreaStyled = styled.textarea.attrs({
  className:
    "bg-transparent flex px-5 py-2 w-full overflow-auto border-2 rounded-3xl focus:border-blueGoogle border-gray-300 transition-all ease-in-out duration-300 focus:outline-none active:outline-none",
})`
  resize: none;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
