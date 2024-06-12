import { useState } from "react";

const INITIAL_FORM_DATA = {
  username: "",
  password: "",
}

/** Signup form
 *
 * Props:
 * State:
 *
 * App -> SignupForm
*/

function SignupForm({ signUp }) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(currFormData => ({ ...currFormData, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    signUp(formData.username, formData.password);
  }

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="SignupForm-username" className="col-5">Username</label>
        <input
          id="SignupForm-username"
          className="col7"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="SignupForm-password" className="col-5">Password</label>
        <input
          id="SignupForm-password"
          className="col7"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button>Sign Up!</button>
    </form>
  );
}

export default SignupForm;