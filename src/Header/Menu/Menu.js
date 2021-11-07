import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

function Menu(props) {
    return (
        <nav>
            <ul className='Menu'>
                <li>
                    <Link to={'/'} className='navLink'>
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                    <Link to={'/post/create'} className='navLink'>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </Link>
                    <Link to={'/search'} className='navLink'>
                        <FontAwesomeIcon icon={faSearch} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;