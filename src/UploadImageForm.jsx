import { useState } from "react";
import "./UploadImageForm.css";

/** Allows user to upload an image file from their local directory.
 *
 * Props: uploadImage function
 *
 * State:
 *
 * App -> UploadImageForm
*/
function UploadImageForm({ uploadImage }) {
  const [imageFile, setImageFile] = useState(null);

  function handleChange(evt) {
    setImageFile(evt.target.files[0]);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(imageFile);
    uploadImage(imageFile);
  }

  return (
    <div className="UploadImageForm">
      <p>Upload your profile picture:</p>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" onChange={handleChange} />
        <button>Upload Image!</button>
      </form>
    </div>
  );
}

export default UploadImageForm;