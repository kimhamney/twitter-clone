import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXJ_5GSLKscY7YtPNA9nlPeQDodev0eQc",
  authDomain: "nwitter-reloaded-3fc29.firebaseapp.com",
  projectId: "nwitter-reloaded-3fc29",
  storageBucket: "nwitter-reloaded-3fc29.appspot.com",
  messagingSenderId: "508900304920",
  appId: "1:508900304920:web:a93091b33e2219a7dbfb6d",
  measurementId: "G-HEH145Y9C9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);