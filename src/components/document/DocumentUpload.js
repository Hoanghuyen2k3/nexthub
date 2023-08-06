// DocumentUpload.js
import React, { useState } from 'react';
import { firestore } from './firebase';
import { addDoc, collection } from 'firebase/firestore';

const DocumentUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const fileContent = await selectedFile.text();
        const ref = await collection('document')
        const data = {
          content: fileContent,
        };
        addDoc(ref, data);
      } catch (error) {
        console.error('Error uploading document:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default DocumentUpload;
