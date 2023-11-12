import axios from 'axios';

export const viewMovieList = async ({ option }) => {
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
    console.log('이거', res.data.results);

    return res.data.results;
  } catch (e) {
    if (e instanceof Error) {
    }
  }
};
