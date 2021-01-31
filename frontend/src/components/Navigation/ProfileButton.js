import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <div className='icon-div'>
                <button className='nav-button' onClick={openMenu}>
                    <i class="fas fa-user-circle"></i>
                </button>

                {showMenu && (
                    <ul className="profile-dropdown">
                        <li>{user.email}</li>
                        <button onClick={logout}>Log Out</button>
                        
                    </ul>
                )}
            </div>
        
        </>
    );
}

export default ProfileButton;