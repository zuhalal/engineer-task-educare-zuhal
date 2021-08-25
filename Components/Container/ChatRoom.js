import React, { useState, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../pages/_app";
import firebase from "firebase";
import {
  ChatroomBorderWrapper,
  ChatroomChatWrapper,
  ChatroomWrapper,
  ChatWrapper,
  TextAreaStyled,
} from "./style";
import SignOut from "../Auth/SignOut";
import { useAuthState } from "react-firebase-hooks/auth";
import { H3, H4, P1, P2, P3 } from "../../styles/typography";

function ChatRoom() {
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt");
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");
  const dummy = useRef();
  const [user] = useAuthState(auth);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (formValue != "") {
      const { uid, photoURL, displayName } = auth.currentUser;

      await messageRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
        displayName,
      });

      document.getElementById("textsubmit").value = "";

      setFormValue("");

      dummy.current.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Message Cannot Be Empty");
    }
  };

  return (
    <div className="xl:p-0 p-3">
      {user ? (
        <div className="flex lg:flex-row flex-col-reverse mt-12 gap-3">
          <div className="w-full justify-start lg:flex hidden">
            <H3 style={{ color: "white" }}>{`Hello, ${user.displayName}`}</H3>
          </div>
          <div className="w-full justify-start lg:hidden flex">
            <H4 style={{ color: "white" }}>{`Hello, ${user.displayName}`}</H4>
          </div>
          <div className="flex w-full justify-end">
            <SignOut />
          </div>
        </div>
      ) : null}
      <ChatroomWrapper>
        <ChatroomBorderWrapper>
          <ChatroomChatWrapper>
            {messages
              ? messages.map((message) => (
                  <ChatMessage message={message} key={message.id} />
                ))
              : null}
            <div ref={dummy}></div>
          </ChatroomChatWrapper>
          <form onSubmit={sendMessage} className="flex justify-center">
            <div className="flex gap-3 w-full items-center">
              <div className="w-full">
                <TextAreaStyled
                  onKeyPress={(e) => {
                    if (e.key == "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      document.getElementById("myBtn").click();
                      return;
                    }
                  }}
                  id="textsubmit"
                  type="text"
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                />
              </div>
              <button
                id="myBtn"
                className="w-max bg-transparent h-full flex items-center text-blueGoogle hover:underline"
                type="submit"
              >
                <P2>Send</P2>
              </button>
            </div>
          </form>
        </ChatroomBorderWrapper>
      </ChatroomWrapper>
    </div>
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
              <img
                src={photoURL}
                style={{ borderRadius: "50%" }}
                alt="profile picture"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start mb-5">
          <div className="flex gap-2">
            <div className="w-10 flex items-end">
              <img
                src={photoURL}
                style={{ borderRadius: "50%" }}
                alt="profile picture"
              />
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
