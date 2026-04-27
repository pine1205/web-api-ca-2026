import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 


const router = express.Router();

router.get('/discover', asyncHandler(async (req, res) => {
    // const discoverMovies = await getMovies();
    res.status(200).send("message");
}));


// movie routes to be added

export default router;
