import UploadImageForm from "./UploadImageForm.jsx";

/**
 * Purpose: renders home page
 *
 * Props: none
 * States: none
 *
 * App > RoutesList > Home
 */
function Home({ uploadImage }) {

  return (
    <div className="Home">
      Homepage!
      <div className="App">
        <UploadImageForm uploadImage={uploadImage} />
      </div>
    </div>
  );
}
export default Home;
