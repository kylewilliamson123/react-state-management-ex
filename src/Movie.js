import React from 'react'
import './App.css'

const Movie = ({ name, price }) =>{
    return(
        <div>
                <h3>{name}</h3>
                <p>{price}</p>
        </div>
    );
};

export default Movie;
