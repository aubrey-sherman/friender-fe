import EditProfileForm from "./EditProfileForm.jsx";
import UploadImageForm from "./UploadImageForm.jsx";

/** Profile component for signed-in user.
 *
 * Props:
 *  - currUser
 *  - uploadImage
 *
 * State: (none)
 *
 * RouteList -> Profile -> { EditProfileForm, UploadImageForm }
*/
function Profile({ currUser, uploadImage }) {

  return (
    <div>
      <h3>Edit your profile</h3>
      <img src={currUser.image_url} />
      <EditProfileForm currUser={currUser} />
      <UploadImageForm uploadImage={uploadImage} />
    </div>
  );
}

export default Profile;