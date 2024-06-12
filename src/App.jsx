import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import UploadImageForm from './UploadImageForm.jsx';
import FrienderApi from './api.js';
import RoutesList from './RoutesList.jsx';
//import './App.css';


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {

  function uploadImage(imageFile) {
    FrienderApi.uploadImage(imageFile);
  }

  function signUp(username, password) {
    FrienderApi.getToken(username, password);
  }

  return (
    <BrowserRouter>
      <RoutesList uploadImage={uploadImage} signUp={signUp}/>
    </BrowserRouter>
  );
};

export default App;
