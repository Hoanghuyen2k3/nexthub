// RealTimeDocumentEditor.js
import React, { useState, useEffect } from 'react';
import { useDocument, useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '../../firebase';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { doc, setDoc, updateDoc, collection } from "firebase/firestore"; 


const RealTimeDocumentEditor = ({ docId }) => {
    const [content, setContent] = useState('');
    const documentsCollection = collection(firestore, 'documents'); // Replace 'documents' with your collection name
    const documentId = docId; // Replace with the actual document ID
    const documentRef = doc(documentsCollection, documentId);

    const [value, loading, error] = useDocument(documentRef);
  
  useEffect(() => {
    if (value?.data()?.content) {
      setContent(value.data().content);
    }
  }, [value]);

  const handleEditorChange = (newContent) => {
    setContent(newContent);
    updateDocument(newContent);
  };

  const updateDocument = async (newContent) => {
    
    // Data to be written to the document
    const data =
        {
          content: newContent,
        };

    // Use setDoc to set the data in the document
    setDoc(documentRef, data)
    .then(() => {
        console.log('Document successfully written!');
    })
    .catch((error) => {
        console.error('Error writing document: ', error);
    });
  


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  }
  return (
    <div>
      <ReactQuill value={content} onChange={handleEditorChange} />
    </div>
  );
};

export default RealTimeDocumentEditor;
