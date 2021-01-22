import { insertMovie } from ".../helpers/db";

export const ADD_MOVIE_TO_VIEWINGLIST = "ADD_MOVIE_TO_VIEWINGLIST";


export const addMovieToViewingList = (movieObj) => {
  try {
    const dbResult = await insertMovie(title, movieId);
    console.log(dbResult);
  } catch (err) {
    console.log(err);
    throw err;
  }

}


