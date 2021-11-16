import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Avatar from '../../common/Avatar/Avatar';
import { follow, getUser, unfollow, me as getMyself } from '../../services/user.service';
import './ProfileHeader.scss';

function ProfileHeader({ username, postNum }) {
	const { user: me, setUser: setMe } = useContext(UserContext);
	const [user, setUser] = useState({});
	const [isFollowing, setIsFollowig] = useState(me?.following?.includes(user._id));
	
	const handleFollow = () => {
		follow(username).then(() => {
			getMyself()
            .then(loggedUser => {
                setMe(loggedUser);
            })
		}).catch(() => setIsFollowig(false));
	}

	const handleUnfollow = () => {
		unfollow(username).then(() => {
			getMyself()
				.then(loggedUser => {
					setMe(loggedUser);
				})
		}).catch(() => setIsFollowig(true))
	}

	useEffect(() => {
		setIsFollowig(me?.following?.includes(user._id))
	}, [user, me])

	useEffect(() => {
		async function initUser() {
			const user = await getUser(username);
			setUser(user);
		}
		initUser();
	}, [username]);

	return (
		<div className="Profile__header">
			<div className="Profile__avatar"><Avatar image={user.image} size="lg" /></div>
			<div>
				<h2 className="profileName">{user.username}</h2>
				<p className="postNum">{postNum} posts</p>
				{me.username !== username ? isFollowing 
				? <button className="btn_unfollow" onClick={handleUnfollow}>Unfollow</button> 
				: <button className="btn_follow" onClick={handleFollow}>Follow</button> : null}
			</div>
		</div>
	);
};

export default ProfileHeader;