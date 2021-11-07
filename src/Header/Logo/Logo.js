import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

function Logo(props) {
    return (
        <Link to={'/'}>
            <div className="Logo">
                <img className="logoPic" src="https://png.monster/wp-content/uploads/2020/11/Instagram-zeichen_2-2c204007.png" />
            </div>
        </Link>
    );
}

export default Logo;