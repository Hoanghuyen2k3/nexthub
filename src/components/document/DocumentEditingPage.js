// DocumentEditingPage.js
import React, {useState} from 'react';
import DocumentEditor from './DocumentEditor';
import DocumentUpload from './DocumentUpload';
import ReactQuill from 'react-quill';

import { firestore, auth } from '../../firebase';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { collection, query, orderBy, limit, addDoc} from 'firebase/firestore';

import { selectLogin } from '../../features/loginSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const DocumentEditingPage = () => {
  const login = useSelector(selectLogin);
  const user = login.user;
  const navigate =useNavigate();
  const handleClick = async () => {
    try {
      const ref = await collection(firestore, 'documents');
      const data =
      {
        user:user,
        content: ""

      };
      const docRef= await addDoc(ref, data);
      const id= docRef.id;
      navigate(id)

        

    } catch (error) {
      console.error('Error saving document:', error);
    }
  };
  

  return (
    <div>
      
      <button onClick={handleClick}>New document</button>
     
      {/* <DocumentEditor/>
      <DocumentUpload /> */}
    </div>
  );
};

export default DocumentEditingPage;
