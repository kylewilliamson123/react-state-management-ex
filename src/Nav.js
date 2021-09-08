import React, {useContext} from 'react'
import './App.css'
import{MovieContext} from './MovieContext'
import MovieList from './MovieList';



const Nav = () =>{
    const [movies, setMovies] = useContext(MovieContext);
    return(
        <div className="navbar">
                <p>Kyle Williamson</p>
                <p>List of Movies: {movies.length}</p>
        </div>
    );
};

export default Nav;
