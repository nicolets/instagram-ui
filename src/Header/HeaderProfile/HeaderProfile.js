import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Avatar from "../../common/Avatar/Avatar";
import { logout } from "../../services/user.service";
import "./HeaderProfile.scss";
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function HeaderProfile(props) {
    const history = useHistory();
	const { user } = useContext(UserContext);

    const logMeOut = () => {
        logout();
        history.push('./sign-in')
    }

	return (
		<div className="HeaderProfile">
			<Link to={`/profile/${user.username}`} className="HeaderProfile">
				<div className="avatarAndName">
					<div>
						<Avatar image={user.image} />
						{user.username}
					</div>
				</div>
			</Link>
			<FontAwesomeIcon icon={faSignOutAlt} onClick={logMeOut} className="logOut" /> 
		</div>
	);
}

export default HeaderProfile;
