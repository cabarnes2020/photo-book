import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import HomeButton from './HomeButton'
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className='nav-bar'>
                <ProfileButton user={sessionUser} />
                <HomeButton />
            </div>
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        // <ul>
        //     <li>
        //         <NavLink exact to="/">Home</NavLink>
        <>
            {isLoaded && sessionLinks}
        </>
        //     </li>
        // </ul>
    );
}

export default Navigation;