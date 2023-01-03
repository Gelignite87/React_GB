import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCYi02HFdOqO0yWG1ZUaSvu6zz34lMpWw4",
  authDomain: "react-gb-2022.firebaseapp.com",
  projectId: "react-gb-2022",
  storageBucket: "react-gb-2022.appspot.com",
  messagingSenderId: "963271718519",
  appId: "1:963271718519:web:afb86075d14e80ccd5f872"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)

export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)

export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password)

export const logOut = async () => await signOut(firebaseAuth)

const db = getDatabase(app)

export const userRef = ref(db, 'user')

// export const messagesRef = ref(db, 'messages')

// export const getChatById = (chatId) => ref(db, `messages/${chatId}`)

// export const getMessageListById = (chatId) => ref(db, `messages/${chatId}/messageList`)