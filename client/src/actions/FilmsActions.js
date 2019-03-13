import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constants/AppConstants.js';

import api from '../api';

const FilmsActions = {
  loadFilms(){
    AppDispatcher.dispatch({
      type: Constants.LOAD_FILMS_REQUEST
    });
    api.listOfFilms()
    .then(({data}) =>
      AppDispatcher.dispatch({
        type: Constants.LOAD_FILMS_SUCCESS,
        films: data
      })
    )
    .catch(err =>
      AppDispatcher.dispatch({
        type: Constants.LOAD_FILMS_FAIL,
        error: err
      })
    );
  },

  addFilm(film){
    api.addFilm(film)
    .then(() =>
      this.loadFilms()
    )
    .catch(err => console.log(err));
  },

  deleteFilm(filmId){
    api.deleteFilm(filmId)
    .then(() =>
      this.loadFilms()
    )
    .catch(err => console.log(err));
  },

  filmSearch(film){
    AppDispatcher.dispatch({
      type: Constants.LOAD_FILMS_REQUEST
    });
    api.searchFilm(film)
    .then(({data}) =>
      AppDispatcher.dispatch({
        type: Constants.LOAD_FILMS_SUCCESS,
        films: data
      })
    )
    .catch(err =>
      AppDispatcher.dispatch({
        type: Constants.LOAD_FILMS_FAIL,
        error: err
      })
    );
  },

  uploadFile(data){
    api.uploadFile(data)
    .then(() =>
      this.loadFilms()
    )
    .catch(err => console.log(err));
  }

}

export default FilmsActions
