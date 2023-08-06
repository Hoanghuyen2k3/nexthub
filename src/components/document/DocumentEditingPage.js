// DocumentEditingPage.js
import React from 'react';
import DocumentEditor from './DocumentEditor';
import DocumentUpload from './DocumentUpload';

const DocumentEditingPage = () => {
  const newDocumentId = 'HlbHPmb4np8ut39XE6Sk'; // Generate a unique ID

  return (
    <div>
      <h1>Document Editor</h1>
      <DocumentEditor docId={newDocumentId} />
      <DocumentUpload />
    </div>
  );
};

export default DocumentEditingPage;
