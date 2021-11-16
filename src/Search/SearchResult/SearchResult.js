import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../common/Avatar/Avatar';
import './SearchResult.scss';

function SearchResult({ user }) {
    return (
        <div className="SearchResult">
            <Link to={'/profile/' + user.username} className="SearchResult__user">
                <Avatar />
                <div className="SearchResult__username">
                    {user.username}
                </div>
            </Link>
        </div>
    );
}

export default SearchResult;