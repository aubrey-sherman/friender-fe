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
  const [areFriends, setAreFriends] = useState(false);
  //const [hasBeenLiked, setHasBeenLiked] = useState(false);
  console.log("* FriendFinder", { currUser, potentialFriends });

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

  async function handleLike() {
    const msg = await FrienderApi.addLike(potentialFriends[potentialFriends.length - 1].username);
    console.log("msg=", msg);

    if (msg === "match") {
      setAreFriends(true);
    }

    // TODO: Should this be checked differently?
    if (msg === "like") {
      potentialFriends.pop();
      setPotentialFriends(potentialFriends => [...potentialFriends]);
    }
  }

  async function handleNext() {
    potentialFriends.pop();
    setAreFriends(false);
    setPotentialFriends(potentialFriends => [...potentialFriends]);
  }

  if (!potentialFriends) {
    return <p>Loading...</p>;
  }

  if (potentialFriends.length === 0) {
    return <p className="text-center m-5 p-3" style={{ backgroundColor: "#FF7F50" }}>
      There are no more people to show you right now. Check back later!
    </p>;
  }

  if (areFriends === true) {
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 }
    });
    return (
      <div>
        <p className="text-center m-5 p-3" style={{ backgroundColor: "#90EE90" }}>
          Yay! The platonic feelings are mutual :)
        </p>
        <FriendCard
          friendDetails={potentialFriends[potentialFriends.length - 1]}
          areFriends={areFriends}
          handleClick={handleNext}
        />
      </div >
    );
  }

  return (
    <div className="FriendFinder text-center m-4">
      <p>Let's find your next friend, {currUser.username}!</p>
      <FriendCard
        friendDetails={potentialFriends[potentialFriends.length - 1]}
        areFriends={areFriends}
        handleClick={handleLike}
        handlePass={handleNext}
      />
    </div>
  );
}

export default FriendFinder;