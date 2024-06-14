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
  const [hasBeenLiked, setHasBeenLiked] = useState(false);
  console.log("* FriendFinder", { currUser, potentialFriends });
  // const idx = potentialFriends.length - 1 || 0;

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

  async function handleClick() {
    const msg = await FrienderApi.addLike(potentialFriends[potentialFriends.length - 1].username);
    console.log("msg=", msg);

    potentialFriends.pop();
    setPotentialFriends(potentialFriends => [...potentialFriends]);
  }

  if (!potentialFriends) {
    return <p>Loading...</p>;
  }

  return (
    <div className="FriendFinder">
      <p>Let's find your next friend, {currUser.username}!</p>
      <FriendCard
        friendDetails={potentialFriends[potentialFriends.length - 1]}
        handleClick={handleClick}
      />
    </div>
  );
}

export default FriendFinder;