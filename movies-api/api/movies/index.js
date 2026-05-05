import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 
import { getNowPlaying } from '../tmdb-api'; 

const router = express.Router();

router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));


router.get('/now_playing', asyncHandler(async (req, res) => {
    const nowPlaying = await getNowPlaying();
    res.status(200).json(nowPlaying);
}));

// movie routes to be added

export default router;
