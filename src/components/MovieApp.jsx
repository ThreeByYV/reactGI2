import { useState, useRef } from 'react';
import axios from 'axios';
import { Search } from 'react-bootstrap-icons';

import MovieCard from './MovieCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import CardGroup from 'react-bootstrap/CardGroup';


export default function MovieApp() {
    const [recs, setRecs] = useState([]);
    const [error, setError] = useState("");
    const inputRef = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault();

        // Clear previous info every time this function is called
        setError('');
        setRecs([]);

        try {
            const allRecData = await axios.get(`/api/results?userGenre=${inputRef.current.value.trim()}`);
            let tmdbPosterUrl = "https://image.tmdb.org/t/p/w500";
        
            // Map through the data and create posterSrc for each item
            const recsWithPosters = allRecData.data.map(eachRec => ({
                ...eachRec, 
                posterSrc: tmdbPosterUrl + eachRec.poster_path
            }));

            setRecs(recsWithPosters);
        } catch (err) {
            setError('Failed to fetch movie recommendations on the client: ' + err);
            console.error(error);
        }
    }

    return (
        <div className="h-[80%] w-[50%] flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {recs.length === 0 ? (
                <form className="flex flex-col gap-3">
                    <h3 className='whitespace-nowrap'>Search for Movies Based on Genre to find recommendations</h3>
                    <div className='relative'>
                        <input 
                            ref={inputRef} 
                            className="bg-white w-full text-black rounded-md h-8 relative text-left pl-4" 
                            type="text"
                            placeholder='Enter a genre'
                        />
                        <button type="submit" onClick={handleSubmit}>
                             <Search className="absolute text-black right-2 top-2"/>
                        </button>
                    </div>
                </form>
            ) : (
                    <>
                    <a className='absolute top-40 left-10 cursor-pointer' onClick={() => window.location.reload()}>Back to Search</a>
                    <CardGroup className="grid grid-cols-2 gap-4 w-screen h-1/2 place-items-start">
                        {recs.slice(0, 6).map((rec, index) => (
                            <MovieCard 
                                key={index} 
                                title={rec.original_title} 
                                src={rec.posterSrc} 
                                text={rec.overview}
                            />
                        )
                        )}
                    </CardGroup>
                    </>
            )}
        </div>
    );
}
