import { ADD_MOVIE_TO_VIEWINGLIST } from "./lists-actions";
import Movie from "../models/movie";

const initialState = {
  viewingList: [],
  movieSurvivorList: [],
};

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_TO_VIEWINGLIST:
      const newMovieObj = new Movie(
        action.movieData.id,
        action.movieData.title,
        action.movieData.posterPath,
        action.movieData.overview
      );
      return {
        viewingList: state.viewingList.concat(newMovieObj),
      };
    default:
      return state;
  }
};

export default movieListReducer;
