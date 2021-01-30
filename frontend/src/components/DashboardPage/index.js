import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './Dashboard.css'
import Searchbar from '../Searchbar/index'
import {getBestPhotographers, checkState} from '../../store/photographers'
import {getPhotos} from '../../store/images'

const DashboardPage = () => {
    //const wholeState = useSelector(state => state);
    const photographerList = useSelector((state) => state.photographers.topPhotographers)
    const imagesList = useSelector((state) => state.images.images)
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state);
    const [finalPhotographer, setFinalPhotographer] = useState()
    
    console.log(sessionUser)

    //this gets only photographers with 5 stars as rating
    useEffect(() => {
        dispatch(getBestPhotographers())
    }, [dispatch])

    // gets every image in db
    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])

    useEffect(() => {
        
        if(sessionUser.photographers.topPhotographers && sessionUser.images.images){
            // console.log('session', sessionUser.images.images)
            const newPhotographers = sessionUser.photographers.topPhotographers.map((photographer) => {
                sessionUser.images.images.find((image) => 
                    photographer['imageUrl'] = Number(photographer.id) === Number(image.photographerId) ? image.imageUrl : ''
                )
                return photographer
            })
            console.log(newPhotographers)
            setFinalPhotographer(newPhotographers) 
        }
        
        // console.log('this is new shape', newPhotographers)
    }, [sessionUser.photographers.topPhotographers, sessionUser.images.images])


    if(!sessionUser.session.user) {
        return <Redirect to='/' />
    }

    return (
        <>
            <div className='dashboard-page'>

                <h1 className='dashboard-title'>Welcome to PhotoBook</h1>
                <div className='search'>
                    <Searchbar />
                </div>
                
                    {finalPhotographer && console.log(finalPhotographer)}
                {
                    // waits for photographerList to be assigned. When its assigned THEN execute code after '&&'
                    finalPhotographer && finalPhotographer.map((photographer) => {
                        return (
                            <div className='card-area'>
                                <a className='card hover' href='/'>
                                    <div className='photographer-info'>
                                        <h3>{photographer.name} shoots {photographer.photoType}</h3>
                                    </div>
                                    <div className='top-rated-image'>
                                        <img src={photographer.imageUrl} alt=''></img>
                                    </div>
                                </a>
                            </ div>
                        )
                    })
                }


            </div>
        </>
    )


}

    











export default DashboardPage;