import { useState } from "react";

/** Edit Profile Form
 *
 * Props:
 *  - currUser
 *
 * State:
 *  - formData
 *
 * Profile -> EditProfileForm
*/
function EditProfileForm({ currUser }) {
  const [formData, setFormData] = useState({
    username: currUser.username,
    first_name: currUser.first_name,
    bio: currUser.bio
  });

  /** Handle form data changing */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));
  }

  return (
    <form>
      <div class="row mb-3">
        <label className="col-sm-2 col-form-label" htmlFor="EditProfileForm-username">Username</label>
        <div class="col-sm-10">
          <input className="form-control" id="EditProfileForm-username" name="username" value={formData.username} onChange={handleChange} disabled />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label" htmlFor="EditProfileForm-first_name">First Name</label>
        <div class="col-sm-10">
          <input className="form-control" id="EditProfileForm-first_name" name="first_name" value={formData.first_name} onChange={handleChange} />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label" htmlFor="EditProfileForm-bio">Bio</label>
        <div className="col-sm-10">
          <textarea className="form-control" id="EditProfileForm-bio" name="bio" value={formData.bio} onChange={handleChange} />
        </div>
      </div>
    </form>
  );
}

export default EditProfileForm;