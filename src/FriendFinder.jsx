/** Shows possible friends for matching.
 *
 * Props:
 *  - currUser
 *
 * State:
 *
 * RouteList -> FriendFinder
 */
function FriendFinder({ currUser }) {

  return <p>Let's find your next friend, {currUser.username}!</p>;
}

export default FriendFinder;