import "./FriendCard.css";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
// import { Link } from "react-router-dom";

const DEFAULT_FRIEND = {
  username: 'friendlyFriend123',
  first_name: 'Friendly Friend',
  image_url: "https://static.thenounproject.com/png/1718249-200.png",
  bio: "Sometimes I'm here every day."
};

/** FriendCard displays basic information for a potential friend.
 *
 * Props:
 *  - friendDetails
 *
 * State: none
 *
 * FriendFinder -> FriendCard
*/
function FriendCard({ friendDetails }) {

  return (
    <div className="FriendCard container">
      <div className="row justify-content-center">
        <div className="col text-center">
          <div className="card">
            <h5 className="card-title fw-bold">{friendDetails.first_name}</h5>
            <img className="card-img-top" src={friendDetails.image_url} alt={friendDetails.username} />
            <div className="card-body">
              <div className="card-text">
                <b>About {friendDetails.first_name}: </b>
                <p>{friendDetails.bio}</p>
              </div>
              <button className="btn btn-primary">
                <i className="FriendCard-smile bi bi-emoji-smile h2"></i>
                {`  Add friend!`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FriendCard;