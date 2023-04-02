import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBReI2_fJt1gYTZiv2PduMRcWmbKVXMxT8",
  authDomain: "ifca-8ad94.firebaseapp.com",
  projectId: "ifca-8ad94",
  storageBucket: "ifca-8ad94.appspot.com",
  messagingSenderId: "1081422852122",
  appId: "1:1081422852122:web:2c10254bf355480b2261a3"
};

initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
