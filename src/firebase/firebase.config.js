// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS2tzsb2eNnbsczv2Hw_ZsClT1XT7lelI",
  authDomain: "chef-master-client.firebaseapp.com",
  projectId: "chef-master-client",
  storageBucket: "chef-master-client.appspot.com",
  messagingSenderId: "462406530850",
  appId: "1:462406530850:web:3c08eea43cbc4a4d66d77b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;