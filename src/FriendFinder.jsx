import FriendCard from "./FriendCard.jsx";
import { useState, useEffect } from "react";
import FrienderApi from "./api.js";

/** Shows possible friends for matching.
 *
 * Props:
 *  - currUser
 *
 * State:
 *  - potentialFriends
 *
 * RouteList -> FriendFinder -> FriendCard
 */
function FriendFinder({ currUser }) {
  const [potentialFriends, setPotentialFriends] = useState(null);

  useEffect(
    function loadPotentialFriendsOnMount() {

      async function getPotentialFriends() {
        const potentialFriends = await FrienderApi.getOtherUsers();
        setPotentialFriends(potentialFriends);
      }

      getPotentialFriends();
    },
    []
  );

  // do logic

  if (!potentialFriends) {
    return <p>Loading...</p>;
  }

  return (
    <div className="FriendFinder">
      <p>Let's find your next friend, {currUser.username}!</p>
      <FriendCard friendDetails={potentialFriends[0]} />
    </div>
  );
}

export default FriendFinder;