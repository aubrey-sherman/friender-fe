import { useState } from "react";

/** Allows user to upload an image file from their local directory.
 *
 * Props: uploadImage function
 *
 * State:
 *
 * App -> UploadImageForm
*/
function UploadImageForm() {
  const [formData, setFormData] = useState(null);

  // FIXME: Update id and name for input field
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("** formData=", evt.target);
  }

  // handleSubmit

  return (
    <div className="UploadImageForm">
      <h3>Upload a profile pic!</h3>
      <form action="/action_page.php" onSubmit={handleSubmit}>
        <input type="file" id="myFile" name="filename" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default UploadImageForm;