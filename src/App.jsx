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
  async function uploadImage(imageFile) {
    await FrienderApi.uploadImage(imageFile);
  }

  /** Sign up a user for site account and log them in on success. */
  async function signUp(newUserDetails) {
    const token = await FrienderApi.signUp(newUserDetails);

    FrienderApi.addToken(token);
    console.log("token on class", token);
    const username = FrienderApi.getUsername(token);
    console.log("** signUp username=", username);
    const userInfo = await FrienderApi.getUser(username);

    setCurrUser(userInfo);
  }

  /** Log in a user and set token in state. */
  async function logIn(username, password) {
    await FrienderApi.logIn(username, password);
  }

  return (
    <BrowserRouter>
      <RouteList currUser={currUser} uploadImage={uploadImage} logIn={logIn} signUp={signUp} />
    </BrowserRouter>
  );
};

export default App;
