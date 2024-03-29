import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../Components/Layout";

import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import { ChakraProvider } from "@chakra-ui/react";

const firebaseConfig = {
  apiKey: "AIzaSyA7xSDgXK88Lk8LjmhHQ3MgM31KIVMIBDg",
  authDomain: "fir-chat-app-educare.firebaseapp.com",
  projectId: "fir-chat-app-educare",
  storageBucket: "fir-chat-app-educare.appspot.com",
  messagingSenderId: "225448849682",
  appId: "1:225448849682:web:ee05f8663f8621deee03cb",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
