// common.js (shared Firebase config)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCLeVSqljS_eNBSu83fP88IBKv4Qb6YBkk",
    authDomain: "my-aswome-project-266a8.firebaseapp.com",
    projectId: "my-aswome-project-266a8",
    storageBucket: "my-aswome-project-266a8.firebasestorage.app",
    messagingSenderId: "541110870469",
    appId: "1:541110870469:web:1e248c6905237d9defebac",
    measurementId: "G-ZTH21Z185L"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
