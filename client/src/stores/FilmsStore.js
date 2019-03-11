import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

const CHANGE_EVENT = 'change';

let _films = [];
let _loadingError = null;
let _isLoading = true;

function formatFilm(film){
  return{
    id: film._id,
    title: film.title,
    year: film.year,
    format: film.format,
    stars: film.stars
  };
}

const FilmsStore = Object.assign({}, EventEmitter.prototype, {
  isLoading(){
    return _isLoading;
  },

  getFilms(){
    return _films;
  },
  emitChange(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback)
  }
});

AppDispatcher.register(action => {
  switch(action.type){
    case AppConstants.LOAD_FILMS_REQUEST: {
      _isLoading = true;

      FilmsStore.emitChange();
      break;
    }
    case AppConstants.LOAD_FILMS_SUCCESS: {
      _isLoading = false;
      _films = action.films.map(formatFilm);
      _loadingError = null;

      FilmsStore.emitChange();
      break;
    }

    case AppConstants.LOAD_FILMS_FAIL: {
      _loadingError = action.error;

      FilmsStore.emitChange();
      break;
    }

    default: {
      console.log('No such handler');
    }
  }
});

export default FilmsStore;
