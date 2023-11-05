// ../Api/movie.ts

import axios from 'axios';

export interface MovieListRequest {
  option: 'now_playing' | 'popular' | 'top_rated' | 'upcoming';
}

export const getMovieList = async ({ option }: MovieListRequest) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${option}?language=en-US&page=1`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );
    return res.data.results;
  } catch (e) {
    if (e instanceof Error) {
    }
  }
};
