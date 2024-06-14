import "./FriendCard.css";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
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
 *  - handleClick
 *
 * State: none
 *
 * FriendFinder -> FriendCard
*/
function FriendCard({ friendDetails, areFriends, handleClick, handlePass }) {

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
              {areFriends &&
                <button className="btn btn-success" onClick={handleClick}>
                  <i className="FriendCard-smile-fill bi bi-emoji-smile h2"></i>
                  {`  Make another friend!`}
                </button>
              }
              {!areFriends &&
                <div className="row">
                  <button className="btn btn-primary col m-4" onClick={handleClick}>
                    {` Like`}
                  </button>
                  <button className="btn btn-warning col m-4" onClick={handlePass}>
                    {` Pass`}
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FriendCard;