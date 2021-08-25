import React, { useState, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../pages/_app";
import firebase from "firebase";
import PrimaryButton from "../Elements/Buttons/PrimaryButton";
import { ChatroomBorderWrapper, ChatroomWrapper, ChatWrapper, TextAreaStyled } from "./style";
import SignOut from "../Auth/SignOut";
import { useAuthState } from "react-firebase-hooks/auth";
import { H3, P1, P2, P3 } from "../../styles/typography";

function ChatRoom() {
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");
  const dummy = useRef();
  const [user] = useAuthState(auth);

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL, displayName } = auth.currentUser;

    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName,
    });

    const clearValue = document.getElementById("textsubmit").value = "";
    await clearValue;

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
            <div className="flex gap-3 w-full items-center">
              <div className="w-full">
                <TextAreaStyled
                  id="textsubmit"
                  rows="2"
                  type="text"
                  onChange={(e) => setFormValue(e.target.value)}
                />
              </div>
              <button className="w-max bg-transparent h-full flex items-center text-blueGoogle hover:underline" type="submit">
                <P2>Send</P2>
              </button>
            </div>
          </form>
        </ChatroomBorderWrapper>
      </ChatroomWrapper>
    </>
  );
}

export const ChatMessage = ({ message }) => {
  const { text, uid, photoURL, displayName } = message;
  const messageClass = uid === auth.currentUser.uid ? "Sent" : "Received";

  return (
    <>
      {messageClass == "Sent" ? (
        <div className="flex flex-col items-end mb-5">
          <div className="flex gap-2">
            <div className="flex flex-col items-start">
              <div className="flex flex-row-reverse items-center gap-2">
                <ChatWrapper>
                  <P3 className="chat">{text}</P3>
                </ChatWrapper>
                <P3>{messageClass}</P3>
              </div>
            </div>
            <div className="w-10 flex items-start">
              <img src={photoURL} style={{ borderRadius: "50%" }} />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start mb-5">
          <div className="flex gap-2">
            <div className="w-10 flex items-end">
              <img src={photoURL} style={{ borderRadius: "50%" }} />
            </div>
            <div className="flex flex-col items-start">
              <P2>{displayName}</P2>
              <div className="flex gap-2 items-center">
                <ChatWrapper>
                  <P3 className="chat">{text}</P3>
                </ChatWrapper>
                <P3>{messageClass}</P3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatRoom;
