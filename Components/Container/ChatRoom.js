import React, { useState, useRef, useEffect } from "react";

import { useCollectionData } from "react-firebase-hooks/firestore";
import SignOut from "../Auth/SignOut";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../pages/_app";
import firebase from "firebase";

import {
  ChatroomBorderWrapper,
  ChatroomChatWrapper,
  ChatroomWrapper,
  ChatWrapper,
  TextAreaStyled,
} from "./style";

import { Spinner } from "@chakra-ui/react";

import { H3, H4, P2, P3 } from "../../styles/typography";

import { convertDate } from "../../libs";

const ChatRoom = () => {
  const [newMessages, setNewMessages] = useState([]);
  const [formValue, setFormValue] = useState("");

  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt");
  const [messages] = useCollectionData(query, { idField: "id" });
  const [user] = useAuthState(auth);

  const dummy = useRef();

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

  useEffect(() => {
    if (newMessages.length <= 0) return;

    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [newMessages]);

  useEffect(() => {
    if (!user || !messages) return;

    if (messages[messages.length - 1].createdAt == null) return;

    const messageTemp = [];

    messages.map((message) => {
      messageTemp.push({
        id: message.id,
        text: message.text,
        createdAt: message.createdAt,
        displayName: message.displayName,
        photoURL: message.photoURL,
        uid: message.uid,
      });
    });

    setNewMessages(getChatByDate(messageTemp));
    console.log(getChatByDate(messageTemp));
  }, [user, messages]);

  return (
    <>
      {messages && user ? (
        <>
          <div className="xl:p-0 p-3">
            {user ? (
              <div className="flex lg:flex-row flex-col-reverse mt-12 gap-3">
                <div className="w-full justify-start lg:flex hidden">
                  <H3
                    style={{ color: "white" }}
                  >{`Hello, ${user.displayName}`}</H3>
                </div>
                <div className="w-full justify-start lg:hidden flex">
                  <H4
                    style={{ color: "white" }}
                  >{`Hello, ${user.displayName}`}</H4>
                </div>
                <div className="flex w-full justify-end">
                  <SignOut />
                </div>
              </div>
            ) : null}
            <ChatroomWrapper>
              <ChatroomBorderWrapper>
                <ChatroomChatWrapper>
                  {newMessages
                    ? newMessages.map((messageByDate) => (
                        <>
                          <div className="w-full flex flex-col items-center gap-3">
                            <div className="bg-gray-300 p-2 sticky top-0 rounded-lg">
                              <P3>{messageByDate.date}</P3>
                            </div>
                            <UserMessage
                              className="w-full"
                              messages={messageByDate.messages}
                              id={messageByDate.id}
                            />
                          </div>
                        </>
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
        </>
      ) : (
        <div className="flex gap-3 w-screen h-screen items-center justify-center">
          <P2 style={{ color: "white" }}>Loading</P2>
          <Spinner size="lg" color="white" />
        </div>
      )}
    </>
  );
};

const UserMessage = ({ messages }) => {
  return (
    <div className="w-full">
      {messages
        ? messages.map((message) => {
            return <ChatMessage message={message} key={message.id} />;
          })
        : null}
    </div>
  );
};

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

const getChatByDate = (messages) => {
  if (!messages || messages.length == 0) return;

  const finalMessages = [];
  const firstMessage = convertDate(messages[0].createdAt.toDate());

  finalMessages.push({
    date: firstMessage,
    messages: [messages[0]],
  });

  if (messages.length == 1) {
    return finalMessages;
  } else {
    messages.map((msg) => {
      const msgDate = convertDate(msg.createdAt.toDate());

      if (finalMessages[finalMessages.length - 1].date == msgDate) {
        finalMessages[finalMessages.length - 1].messages.push(msg);
      } else {
        finalMessages.push({
          date: msgDate,
          messages: [msg],
        });
      }
      return msg;
    });
  }

  return finalMessages;
};

export default ChatRoom;
