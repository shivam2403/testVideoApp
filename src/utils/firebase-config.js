import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDQGaCTNEH3L1_QSvyZyXeYhphwYMgTyno",
    authDomain: "leetclone-f0c43.firebaseapp.com",
    projectId: "leetclone-f0c43",
    storageBucket: "leetclone-f0c43.appspot.com",
    messagingSenderId: "817027207691",
    appId: "1:817027207691:web:82b9649ff37e1c73c1ad0e",
    measurementId: "G-D9FFVTX084"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const firebaseAuth=getAuth(app);