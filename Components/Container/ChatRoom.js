import React, { useState, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../pages/_app";
import firebase from "firebase";

function ChatRoom() {
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");
  const dummy = useRef();

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
      {messages
        ? messages.map((message) => (
            <ChatMessage message={message} key={message.id} />
          ))
        : null}
      <div ref={dummy}></div>
      <form onSubmit={sendMessage}>
        <input type="text" onChange={(e) => setFormValue(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export const ChatMessage = ({ message }) => {
  const { text, uid } = message;
  const messageClass = uid === auth.currentUser.uid ? "Sent" : "Received";

  return (
    <div className="border-blue-400 bg-blue-400 text-white flex flex-col gap-1 mb-4 w-full justify-center items-center">
      <p>{text}</p>
      <p>{messageClass}</p>
    </div>
  );
};

export default ChatRoom;
