// DocumentEditor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { firestore } from '../../firebase';
import { addDoc, collection } from '@firebase/firestore';

const DocumentEditor = ({ docId }) => {
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
    </div>
  );
};

export default DocumentEditor;
