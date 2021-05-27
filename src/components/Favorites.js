import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { selectFavorites } from '../app/FavoriteSlice';
import './Favorites.css'
function Favorites() {
    const favList = useSelector(selectFavorites);
    return (
        <div className='favorites'>
            <h4>Favorites</h4>
            <div className='fav_container'>
                {favList.map((item) => (
                    <div className='fav'>
                        <p>{item.id}</p>
                        <h5>{ item.item}</h5>
                    </div>
                ))}
            </div>
            <Link to='/'>
                <button className='home'>Back to home</button>
            </Link>
        </div>
    )
}

export default Favorites
