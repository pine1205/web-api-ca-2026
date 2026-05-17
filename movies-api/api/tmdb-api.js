import fetch from 'node-fetch';


//home page - discover endpoint
export const getMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    );

    if (!response.ok) {
          throw new Error(response.json().message);
    }

    return await response.json();
};



//now playing endpoint
export const getNowPlaying = async () => {
    const response = await fetch(
       `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
          throw new Error(response.json().message);
    
    }

    return await response.json();
};


//upcoming endpoint
export const getUpcoming = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
          throw new Error(response.json().message);
    
    }

    return await response.json();
};


//popular endpoint
export const getPopular = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
          throw new Error(response.json().message);
    
    }

    return await response.json();
};

//popular endpoint
export const getTopRated = async () => {
    const response = await fetch(
       `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1` 
    );

    if (!response.ok) {
          throw new Error(response.json().message);
    
    }

    return await response.json();
};






