import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 
import { getNowPlaying } from '../tmdb-api'; 
import { getUpcoming} from '../tmdb-api';

const router = express.Router();

router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));


router.get('/now_playing', asyncHandler(async (req, res) => {
    const nowPlaying = await getNowPlaying();
    res.status(200).json(nowPlaying);
}));


router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcoming();
    res.status(200).json(upcomingMovies);
}));

// movie routes to be added

export default router;
