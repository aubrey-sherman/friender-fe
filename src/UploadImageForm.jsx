
/** Allows user to upload an image file from their local directory. */
function UploadImageForm() {

  // FIXME: Update id and name for input field

  return (
    <form action="/action_page.php">
      <input type="file" id="myFile" name="filename" />
      <input type="submit" />
    </form>
  );
}

export default UploadImageForm;