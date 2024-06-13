import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home.jsx";
import LoginForm from "./LoginForm.jsx";
import SignupForm from "./SignupForm.jsx";
import FriendFinder from "./FriendFinder.jsx";
import Profile from "./Profile.jsx";

/**
 * Purpose: route to different components based on URLs
 *
 * Props:
 *  - currentUser
 *  - uploadImage
 *  - signUp
 *  - logIn
 *
 * States: none
 *
 *  App > RouteList -> {FriendFinder, Home, SignupForm, LoginForm}
 */
function RouteList({ currUser, uploadImage, signUp, logIn }) {
  return (
    <div className="RoutesList">
      {currUser &&
        <Routes>
          <Route path="/" element={<FriendFinder currUser={currUser} />} />
          <Route path="/profile" element={<Profile uploadImage={uploadImage} currUser={currUser} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      }
      {!currUser &&
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm signUp={signUp} />} />
          <Route path="/login" element={<LoginForm logIn={logIn} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      }
    </div>
  );
}

export default RouteList;