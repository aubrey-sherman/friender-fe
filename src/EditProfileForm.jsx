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
      <label htmlFor="EditProfileForm-username">Username</label>
      <input id="EditProfileForm-username" name="username" value={formData.username} onChange={handleChange} disabled />
      <label htmlFor="EditProfileForm-first_name">First Name</label>
      <input id="EditProfileForm-first_name" name="first_name" value={formData.first_name} onChange={handleChange} />
      <label htmlFor="EditProfileForm-bio">Bio</label>
      <input id="EditProfileForm-bio" name="bio" value={formData.bio} onChange={handleChange} />
    </form>
  );
}

export default EditProfileForm;