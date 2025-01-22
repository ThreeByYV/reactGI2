require('dotenv').config()
const axios = require('axios');

export default convertToId = async (userMovieName) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(userMovieName)}&api_key=${process.env.API_KEY}`;

    const headers = {
        accept: 'application/json',
        Authorization: process.env.TMDB_API_TOKEN
    };

    try {
        const response = await axios.get(url, { headers });
        const IdArr = response.data?.results.map(results => results.id);

        if (response.data.results.length === 0) {
            throw new Error("Could not find movie's name.");
        }
        return IdArr
    } catch (error) {
        throw new Error("Failed to convert movie ID: " + error);
    }
};

