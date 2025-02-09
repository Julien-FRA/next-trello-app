import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC2N-KsZrwi5a4MJfdNHdA8Wfxi92XfwEI",
  authDomain: "trello-app-8bb80.firebaseapp.com",
  projectId: "trello-app-8bb80",
  storageBucket: "trello-app-8bb80.firebasestorage.app",
  messagingSenderId: "1055635388052",
  appId: "1:1055635388052:web:2a1ac89023a64fe8482681",
  measurementId: "G-BDZFLD56SS",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
