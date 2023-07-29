import React, { useState, useEffect } from 'react';
import './index.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moviecard from '../Moviecard';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await axios.post('https://hoblist.com/api/movieList', {
                category: 'movies',
                language: 'kannada',
                genre: 'all',
                sort: 'voting',
            });

            setMovies(response.data.result);
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    };
    console.log(movies)

    return (
        <div>
            <nav>
                <Link to='/company'>
                    <button className='profile'>Company Info</button>
                </Link>
            </nav>
            <h2 className='movie-list'>Movie List</h2>
     
                <div className='movie-container'>
                    {movies.map((each, index) => {
                        return <Moviecard key={index} details={each} clickData={each} />
                    })}
                </div>

           
         
        </div>
    );
};

export default Home;
