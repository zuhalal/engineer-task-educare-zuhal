import Head from "next/head";

import { useAuthState } from "react-firebase-hooks/auth";

import ChatRoom from "../Components/Container/ChatRoom";
import Login from "../Components/Container/Login";
import { auth } from "./_app";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <div className={styles.container}>
      <Head>
        <title>Chatroom App</title>
        <meta
          name="Chatroom App"
          content="Chatroom App Build Using Firebase and Next Js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen xl:w-auto w-full">
        {user ? <ChatRoom /> : <Login />}
      </main>
    </div>
  );
}
