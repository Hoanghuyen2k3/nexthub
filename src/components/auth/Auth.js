// src/components/Auth.js
import React, {useState } from 'react';
import { firestore, auth } from '../../firebase';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { userLogin, userLogout } from '../../features/loginSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { collection, query, orderBy, limit, addDoc} from 'firebase/firestore';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const [user] = useAuthState(auth);



  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .catch(error => {
        console.error(error);
        dispatch(userLogout());
      });

    if (user) {
      const { uid, photoURL } = auth.currentUser;
      await dispatch(userLogin({uid: uid, photoURL: photoURL}));
      navigate("/document")

      console.log('User UID:', uid);
    } else {
      dispatch(userLogout());
    }
  }
  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password); // Use 'auth' object
      console.log("success");
      if (user) {
        const { uid, photoURL } = auth.currentUser;
        await dispatch(userLogin({uid: uid, photoURL: photoURL}));
  
        console.log('User UID:', uid);
        navigate("/document")
      } else {
        dispatch(userLogout());
      }
    } catch (error) {
        console.log("error")
        dispatch(userLogout())
      // Handle login error
    }
  };
  
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Use 'auth' object
      console.log("success");
      if (user) {
        const { uid, photoURL } = auth.currentUser;
        await dispatch(userLogin({uid: uid, photoURL: photoURL}));
  
        console.log('User UID:', uid);
        navigate("/document")
      } else {
        dispatch(userLogout());
      }
      // Handle successful registration
    } catch (error) {
        console.log("error")
        dispatch(userLogout())
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
