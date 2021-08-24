import Head from "next/head";

import { useAuthState } from "react-firebase-hooks/auth";

import SignOut from "../Components/Auth/SignOut";
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

      <main className="w-screen min-h-screen">
        {user ? <ChatRoom /> : <Login />}
        <SignOut />
      </main>
    </div>
  );
}
