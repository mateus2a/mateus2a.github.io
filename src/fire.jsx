// eslint-disable-next-line import/no-unresolved
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCI6vNKCfMTY1m7BrDcloxapzTtyFfBqgQ",
  authDomain: "react-firebase-43607.firebaseapp.com",
  databaseURL: "https://react-firebase-43607-default-rtdb.firebaseio.com",
  projectId: "react-firebase-43607",
  storageBucket: "react-firebase-43607.appspot.com",
  messagingSenderId: "994168358268",
  appId: "1:994168358268:web:83ef1a95f568541ced90f9",
  measurementId: "G-72WZQKNT38",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
