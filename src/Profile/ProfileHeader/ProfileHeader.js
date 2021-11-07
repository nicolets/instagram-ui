import React, { useEffect, useState } from 'react';
import Avatar from '../../common/Avatar/Avatar';
import { getUser } from '../../services/user.service';
import './ProfileHeader.scss';

function ProfileHeader({ username, postNum }) {
	
	const [user, setUser] = useState({});
	
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
			</div>
		</div>
	);
}

export default ProfileHeader;