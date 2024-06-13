import FriendCard from "./FriendCard.jsx";

/** Shows possible friends for matching.
 *
 * Props:
 *  - currUser
 *
 * State:
 *
 * RouteList -> FriendFinder -> FriendCard
 */
function FriendFinder({ currUser }) {

  return (
    <div className="FriendFinder">
      <p>Let's find your next friend, {currUser.username}!</p>
      <FriendCard />
    </div>
  );
}

export default FriendFinder;