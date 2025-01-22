const express = require('express')
const convertToId = require('./utils/convertToId.js')
const getSimilarGenresMovies = require('./utils/similarGenre.js')
const app = express();

require('dotenv').config()

const cors = require('cors');
app.use(cors());


const port = 3000;

//must setup backend to act as a proxy for frontend and tmdb to avoid CORS issue because will request originate from this server
app.get('/api/results', async (req, res) => {

    const userOption = req.query?.userGenre;
    
    try {
        const idArr = await convertToId(userOption)
        const results = await getSimilarGenresMovies(idArr);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch similar movies: " + error, });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});