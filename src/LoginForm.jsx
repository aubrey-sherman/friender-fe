import { useState } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_FORM_DATA = {
  username: "",
  password: "",
};

/** Handles logging in a user.
 *
 * Props:
 *
 * State:
 *
 * RouteList -> LoginForm
 */
function LoginForm({ logIn }) {

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(currFormData => ({ ...currFormData, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    logIn(formData);
    navigate("/");
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="LoginForm-username" className="col-5">Username</label>
        <input
          id="LoginForm-username"
          className="col7"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="LoginForm-password" className="col-5">Password</label>
        <input
          id="LoginForm-password"
          className="col7"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button>Log In</button>
    </form>
  );
}

export default LoginForm;