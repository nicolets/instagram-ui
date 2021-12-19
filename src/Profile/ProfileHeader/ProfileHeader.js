import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Avatar from '../../common/Avatar/Avatar';
import { follow, getUser, unfollow, me as getMyself, updateUserImage } from '../../services/user.service';
import { ProfileHeaderSchema } from './ProfieHeader.schema';
import './ProfileHeader.scss';

function ProfileHeader({ username, postNum }) {
	const { user: me, setUser: setMe } = useContext(UserContext);
	const [user, setUser] = useState({});
	const [isFollowing, setIsFollowig] = useState(me?.following?.includes(user._id));
	const [profileImage, setProfileImage] = useState(null)
	
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

	// useEffect(() => {
	// 	console.log('now')
	// 	updateUserImage(me._id, profileImage);
	// }, [profileImage])

	return (

		<div className="Profile__header">
			<div>
				<div className="Profile__avatar"><Avatar image={user.image} size="lg" /></div>			
				<input type="file" name="image" onChange={e => {
							setProfileImage(e.currentTarget.files[0])
				}} />
			</div>
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