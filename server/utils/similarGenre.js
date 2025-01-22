const axios = require('axios')
require('dotenv').config()



const getSimilarGenresMovies = async (ids) => {
    const headers = {
        accept: 'application/json',
        Authorization: process.env.TMDB_API_TOKEN
    };

    const allResults = [];
   
    try {
        for (const id of ids) {
            const url = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1&per_page=5&api_key=${process.env.API_KEY}`;
            const response = await axios.get(url, { headers });
            allResults.push(...response.data?.results);
        }

        if (allResults.length === 0) {
            throw new Error("Could not find similar movies from the provided genres.");
        }
        return allResults;
        
    } catch (error) {
        throw new Error("Failed to fetch similar genre movies: " + error);
    }
};

module.exports = getSimilarGenresMovies;
