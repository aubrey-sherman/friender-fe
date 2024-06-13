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

    const username = FrienderApi.getUsername(token);

    const userInfo = await FrienderApi.getUser(username);

    setCurrUser(userInfo);
  }

  /** Log in a user and set currUser in state. */
  async function logIn(username, password) {
    const token = await FrienderApi.logIn(username, password);

    FrienderApi.addToken(token);

    const userInfo = await FrienderApi.getUser(username);
    setCurrUser(userInfo);
  }

  return (
    <BrowserRouter>
      <RouteList currUser={currUser} uploadImage={uploadImage} logIn={logIn} signUp={signUp} />
    </BrowserRouter>
  );
};

export default App;
