import "./FriendCard.css";
// import { Card, CardBody, CardTitle, CardText } from "reactstrap";
// import { Link } from "react-router-dom";

const DEFAULT_FRIEND = {
  username: 'friendlyFriend123',
  firstName: 'Friendly Friend',
  imageUrl: "https://static.thenounproject.com/png/1718249-200.png",
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
function FriendCard({ friendDetails = DEFAULT_FRIEND }) {

  return (
    <div className="FriendCard container">
      <div className="row justify-content-center">
        <div className="col text-center">
          <div className="card">
            <h5 className="card-title fw-bold">{friendDetails.firstName}</h5>
            <img className="card-img-top" src={friendDetails.imageUrl} alt={friendDetails.username} />
            <div className="card-body">
              <p className="card-text">
                <b>About {friendDetails.firstName}: </b>
                <p>{friendDetails.bio}</p>
              </p>
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