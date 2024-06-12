import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import FrienderApi from './api.js';
import RouteList from './RouteList.jsx';
//import './App.css';


/** Component for entire Friender app.
 *
 * Props: none
 * State:
 *  - token
 *  - currentUser
 *
 * App -> RouteList
 *
*/

function App() {
  // const [token, setToken] = useState(null);
  const [currUser, setCurrUser] = useState(null);

  /** Upload image file to AWS bucket. */
  function uploadImage(imageFile) {
    FrienderApi.uploadImage(imageFile);
  }

  /** Sign up a user for site account. */
  function signUp(newUserDetails) {
    FrienderApi.signUp(newUserDetails);
  }

  /** Log in a user and set token in state. */
  function logIn(username, password) {
    FrienderApi.logIn(username, password);
  }

  return (
    <BrowserRouter>
      <RouteList currUser={currUser} uploadImage={uploadImage} signUp={signUp} />
    </BrowserRouter>
  );
};

export default App;
