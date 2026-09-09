import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "PASTE_YOUR_KEY",
  authDomain: "webbeds-tracker.firebaseapp.com",
  databaseURL: "https://webbeds-tracker-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webbeds-tracker",
  storageBucket: "webbeds-tracker.appspot.com",
  messagingSenderId: "PASTE_MSG_ID",
  appId: "PASTE_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
