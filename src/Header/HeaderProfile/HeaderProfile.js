import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Avatar from '../../common/Avatar/Avatar';
import './HeaderProfile.scss';


function HeaderProfile(props) {

    const { user } = useContext(UserContext);

    return (
        <Link to={`/profile/${user.username}`} className="HeaderProfile">
            <div>
                <Avatar image={user.image} />
                { user.username }
            </div>
        </Link>
    );
}

export default HeaderProfile;