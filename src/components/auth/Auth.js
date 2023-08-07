// src/components/Auth.js
import React, {useState } from 'react';
import { firestore, auth } from '../../firebase';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';


const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .catch(error => {
        console.error(error);
      });
  }
  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password); // Use 'auth' object
      console.log("success");
    } catch (error) {
        console.log("error")
      // Handle login error
    }
  };
  
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Use 'auth' object
      console.log("success");
      // Handle successful registration
    } catch (error) {
        console.log("error")
      // Handle registration error
    }
  };
  

  return (
    <div>
      <h2>Authentication</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>

    </div>
  );
};

export default Auth;
