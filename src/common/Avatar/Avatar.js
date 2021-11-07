import React from 'react';
import './Avatar.scss';
import PropTypes from 'prop-types';

function Avatar({ image, size }) {
    return (
        <div className={`Avatar ${size || 'md'}`}>
            <img src={image || "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"} alt="Avatar" className="Avatar_img" />

        </div>
    );
}

Avatar.propTypes = {
    image: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

export default Avatar;