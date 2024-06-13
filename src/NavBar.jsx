import { Link, NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

/** Top navigation bar for site.
 *
 * Props: (none)
 * State: (none)
 *
 * App -> NavBar
 */
function NavBar({ currUser, logOut }) {
  console.log("* NavBar", currUser);

  function loggedInNav() {
    return (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-4">
        <NavLink className="nav-link" to="/friends">
            Friends
          </NavLink>
        </li>
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/">
            Find Friends
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/profile" >
            Profile
          </NavLink>
        </li>
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/" onClick={logOut}>
            Log out {currUser.first_name || currUser.username}
          </NavLink>
        </li>
      </ul>
    );
  }


  function loggedOutNav() {
    return (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Friender
        </Link>
        {currUser ? loggedInNav() : loggedOutNav()}
      </div>
    </nav>
  );
}

export default NavBar;