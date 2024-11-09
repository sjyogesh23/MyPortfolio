// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

// Firebase config object (update it with your own credentials)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://my-portfolio-4a13a-default-rtdb.firebaseio.com/",
  projectId: "my-portfolio-4a13a",
  storageBucket: "my-portfolio-4a13a.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const realtimeDb = getDatabase(app);

export { realtimeDb, ref, get };

