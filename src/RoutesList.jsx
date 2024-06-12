import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home.jsx";
import SignupForm from "./SignupForm.jsx";

/**
 * Purpose: route to different components based on URLs
 *
 * Props:
 *
 * States: none
 *
 *  App > RoutesList ->
 */
function RoutesList({ uploadImage, signUp }) {
  return (
    <div className="RoutesList">
      <Routes>
        <Route path="/" element={<Home uploadImage={uploadImage} />} />
        <Route path="/signup" element={<SignupForm signUp={signUp} />} />
      </Routes>
    </div>
  );
}

export default RoutesList;