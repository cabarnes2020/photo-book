import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './Dashboard.css'
import Searchbar from '../Searchbar/index'

const DashboardPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state);

    console.log(sessionUser)

    if(!sessionUser) {
        return <Redirect to='/' />
    }


    return (
        <div className='dashboard-page'> 
            
            <h1>Welcome to PhotoBook</h1>

            <Searchbar />
            

        </div>
    )












} 

export default DashboardPage;