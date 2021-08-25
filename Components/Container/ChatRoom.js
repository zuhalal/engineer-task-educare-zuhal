import React, { useState, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../pages/_app";
import firebase from "firebase";
import PrimaryButton from "../Elements/Buttons/PrimaryButton";
import { ChatroomBorderWrapper, ChatroomWrapper } from "./style";
import SignOut from "../Auth/SignOut";
import { useAuthState } from "react-firebase-hooks/auth";
import { H3 } from "../../styles/typography";

function ChatRoom() {
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");
  const dummy = useRef();
  const [user] = useAuthState(auth);

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid } = auth.currentUser;

    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
    });

    setFormValue("");

    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {user ? (
        <div className="flex mt-12">
          <div className="flex w-full justify-start">
            <H3 style={{ color: "white" }}>{`Hello, ${user.displayName}`}</H3>
          </div>
          <div className="flex w-full justify-end">
            <SignOut />
          </div>
        </div>
      ) : null}
      <ChatroomWrapper>
        <ChatroomBorderWrapper>
          {messages
            ? messages.map((message) => (
                <ChatMessage message={message} key={message.id} />
              ))
            : null}
          <div ref={dummy}></div>
          <form onSubmit={sendMessage} className="flex justify-center">
            <div className="flex gap-3 items-center">
              <div>
                <input
                  type="text"
                  onChange={(e) => setFormValue(e.target.value)}
                />
              </div>
              <PrimaryButton additionalStyle="w-max" type="submit">
                Submit
              </PrimaryButton>
            </div>
          </form>
        </ChatroomBorderWrapper>
      </ChatroomWrapper>
    </>
  );
}

export const ChatMessage = ({ message }) => {
  const { text, uid } = message;
  const messageClass = uid === auth.currentUser.uid ? "Sent" : "Received";

  return (
    <>
      {messageClass == "Sent" ? (
        <div className="flex justify-end">
          <div className="border-blue-400 rounded-md w-52 bg-blue-400 text-white flex flex-col gap-1 mb-4 justify-center items-center">
            <p>{text}</p>
            <p>{messageClass}</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-start">
          <div className="border-blue-400 rounded-md w-52 bg-blue-400 text-white flex flex-col gap-1 mb-4 justify-center items-center">
            <p>{text}</p>
            <p>{messageClass}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatRoom;
