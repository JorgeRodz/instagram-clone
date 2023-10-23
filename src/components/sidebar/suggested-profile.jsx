import { useState } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from '../../services/firebase';

export default function SuggestedProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    await updateFollowedUserFollowers(profileDocId, userId, false);
    // const [user] = await getUserByUserId(userId);
    // setActiveUser(user);
  }

  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
          onError={(e) => {
            e.target.src = `/images/avatars/default.png`;
          }}
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <button
        className="text-xs font-bold text-blue-medium"
        type="button"
        onClick={handleFollowUser}
      >
        Follow
      </button>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  profileDocId: Proptypes.string.isRequired,
  username: Proptypes.string.isRequired,
  profileId: Proptypes.string.isRequired,
  userId: Proptypes.string.isRequired,
  loggedInUserDocId: Proptypes.string.isRequired,
};
