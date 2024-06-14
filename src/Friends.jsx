import FriendCard from "./FriendCard.jsx";
import FrienderApi from "./api.js";
import { useEffect, useState } from "react";
import { Card, CardTitle, CardImg } from "reactstrap";

/** Friends component displays a user's list of friends.
 *
 * Props:
 *  - currUser
 *  - friends
 *
 * RouteList -> Friends -> FriendCard
*/
function Friends({ currUser }) {
  const [friends, setFriends] = useState(null);
  console.log("* Friends", friends);

  useEffect(
    function loadFriendsOnMount() {

      async function getFriends() {
        let friends = await FrienderApi.getFriends(currUser.username);
        setFriends(friends);
      }

      getFriends();
    },
    []
  );


  if (!friends) {
    return <p>Loading...</p>;
  }

  return (
    <div className="m-4">
      <h3>Connect with your friends!</h3>
      <ul>
        {friends.map(friend => (
          <Card className="m-3 pb-2 text-center" style={{ width: "20rem" }} key={friend.username}>
            <CardTitle className="m-1">{friend.first_name}</CardTitle>
            <img className="rounded mx-auto d-block" style={{ width: "10rem" }} src={friend.image_url} alt={friend.username} />
          </Card>
        ))}
      </ul>
    </div>

  );
}

export default Friends;