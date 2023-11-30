import React from 'react'
import ReactDOM from 'react-dom/client'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import './index.css'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9kCTDYkvGxArPVQxehhInl_eS5UWylck",
  authDomain: "ecommerce-react-cd198.firebaseapp.com",
  projectId: "ecommerce-react-cd198",
  storageBucket: "ecommerce-react-cd198.appspot.com",
  messagingSenderId: "239476449233",
  appId: "1:239476449233:web:c18fad21354bc529098af0"
};


export const appFirestore = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
