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


const DocumentEditingPage = () => {
  const [user] = useAuthState(auth);

  if (user) {
    // Destructure the uid property if user is logged in
    const { uid, photoURL } = auth.currentUser;
    console.log('User UID:', uid);
  } else {
    console.log('User is not logged in');
  }
  
  const [content, setContent] = useState('');

  const handleEditorChange = (newContent) => {
    setContent(newContent);
    saveDocument(newContent);
  };

  const saveDocument = async (newContent) => {
    try {
      const ref = await collection(firestore, 'documents');
      const data =
      {
        content: newContent,
      };
      addDoc(ref, data);
    } catch (error) {
      console.error('Error saving document:', error);
    }
  };

  return (
    <div>
      <ReactQuill value={content} onChange={handleEditorChange} />
      <h1>Document Editor</h1>
      <button>Create</button>
      <button>Upload</button>
      {/* <DocumentEditor/>
      <DocumentUpload /> */}
    </div>
  );
};

export default DocumentEditingPage;
