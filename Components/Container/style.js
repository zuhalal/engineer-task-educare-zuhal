import styled from "styled-components";

export const LoginWrapper = styled.div.attrs({
  className:
    " h-full flex flex-col justify-center items-center lg:w-1/2 bg-white",
})``;

export const ChatroomWrapper = styled.div.attrs({
  className: "lg:px-52 my-12 py-5 px-0 w-full",
})``;

export const ChatroomBorderWrapper = styled.div.attrs({
  className: "p-6 overflow-y-auto",
})`

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
      display: none;
    }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  background-color: #f5f5f5;
  border-radius: 8px;

  @media only screen and (min-width: 1024px) {
    max-height: 600px;
    width: 800px;
  }

  @media only screen and (max-width: 1024px) {
    max-height: 600px;
    width: 100%;
  }
`;

export const ChatroomChatWrapper = styled.div.attrs({
  className: "overflow-y-auto mb-5",
})`

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
      display: none;
    }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  background-color: transparent;
  
  max-height: 400px;
  width: 100%;
`;

export const ChatWrapper = styled.div.attrs({
  className:
    "border-blue-400 rounded-md h-auto p-2 bg-blue-400 text-white flex flex-col gap-1 items-center",
})`

  .chat {
    word-break: break-word;
  }

  @media only screen and (min-width: 1024px) {
    min-width: 208px;
    max-width: 300px;
  }

  @media only screen and (max-width: 1024px) {
    min-width: 100px;
    max-width: 200px;
  }
  
`;

export const TextAreaStyled = styled.input.attrs({
  className:
    "bg-transparent flex px-5 lg:py-2 w-full overflow-auto border-2 rounded-3xl focus:border-blueGoogle border-gray-300 transition-all ease-in-out duration-300 focus:outline-none active:outline-none",
})`
  resize: none;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    height: 5vh;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
