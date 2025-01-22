import axios from 'axios';

const convertToId = async (userMovieName) => {
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



export default async function handler(req, res) {
    const userOption = req.query?.userGenre;

    try {
        const idArr = await convertToId(userOption);
        const results = await getSimilarGenresMovies(idArr);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch similar movies: " + error.message });
    }
}
