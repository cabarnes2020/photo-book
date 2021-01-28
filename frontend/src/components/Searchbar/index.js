import React from 'react'
import './Searchbar.css'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAll} from '../../store/photographers'
import * as photographerActions from '../../store/photographers';

const Searchbar = () => {

    const photographerList = useSelector((state) => state.photographers.photographers)
    const [keyword, setKeyword] = useState('')
    const [filtered, setFiltered] = useState([]);
    //const [photographers, setPhotographers] = useState();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    useEffect(() => {
       setFiltered(
            photographerList.filter((photographer) => {
                return photographer.name.toLowerCase().includes(keyword.toLowerCase()) || photographer.address1.toLowerCase().includes(keyword.toLowerCase())
            })
        )
        console.log(filtered)
    }, [keyword, photographerList])

    return (
        <>
        <input 
            className='searchbar'
            value={keyword}
            placeholder={'Enter name or city'}
            onChange={(e) => setKeyword(e.target.value)} //setKeyword(e.target.value)} 
        />
        <div className='photographer-list-render'>
            <ul>
                {
                    filtered.map((photographer) => {
                        return <li key= {photographer.name}>{photographer.name}</li>
                    })
                }
            </ul>
        </div>
        </>
    )
}


export default Searchbar



//set up a photographer slice of state in store that collects photographer objects from db
//use useSelector to choose the photographer slice of state from the redux store 
//filter the keyword, and then map the results of the search as the keyword updates