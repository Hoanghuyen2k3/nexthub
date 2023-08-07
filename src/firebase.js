// firebase.js
import {initializeApp} from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Add this import

const firebaseConfig = {
    apiKey: "AIzaSyBhsx4bff_HgNUHLVpj6mL5oeDdFPsVE8E",
    authDomain: "nexthub-459e7.firebaseapp.com",
    projectId: "nexthub-459e7",
    storageBucket: "nexthub-459e7.appspot.com",
    messagingSenderId: "869711253324",
    appId: "1:869711253324:web:99cd9cf99d47d41e5909e9",
    measurementId: "G-6LDS4T8VZD"
};

const app =initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app); // Initialize auth object

