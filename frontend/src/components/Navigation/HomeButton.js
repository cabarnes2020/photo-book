import React from "react";
import { useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';

function HomeButton({ user }) {
    const sessionUser = useSelector(state => state);

    const goHome = () => {
        if (sessionUser.session.user){
            window.location.href = 'http://localhost:3000/dashboard'
            return
        }

        window.location.href = 'http://localhost:3000/'
    };

    // useEffect(() => {
    //     if (!showMenu) return;

    //     const closeMenu = () => {
    //         setShowMenu(false);
    //     };

    //     document.addEventListener('click', closeMenu);

    //     return () => document.removeEventListener("click", closeMenu);
    // }, [showMenu]);

    // const logout = (e) => {
    //     e.preventDefault();
    //     dispatch(sessionActions.logout());
    // };

    return (
        <>
            <div className='icon-div'>
                <button className='nav-button' onClick={goHome}>
                    <i class="fas fa-home"></i>
                </button>   
            </div>
            {/* {showMenu && (
                <ul className="profile-dropdown">
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        <button onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )} */}
        </>
    );
}

export default HomeButton;