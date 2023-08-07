// import React from 'react';
// import DocumentEditingPage from './components/document/DocumentEditingPage';
// import RealTimeDocumentEditor from './components/document/RealTimeDocument';
// function App() {
//   return (
//     <div className="App">
//       {/* <DocumentEditingPage /> */}
//       <RealTimeDocumentEditor  docId="xspb8fYMfQc5uNpuWUw8" />
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import Chat from './components/real-time-chat/Chat';
// import Auth from './components/auth/Auth';
// function App() {
  
 
//   return (
//     <div>
//       <Chat />
//       <Auth />
     
//     </div>
//   );
// }

// export default App;
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

import Chat from "./components/real-time-chat/Chat";
import DocumentEditingPage from "./components/document/DocumentEditingPage";
import Auth from "./components/auth/Auth";

function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path="/">      
      <Route path="login" element={<Auth />} />
      <Route path="chat" element={<Chat />} />
      <Route path="document" element ={<DocumentEditingPage />} />
  
    </Route>))
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;