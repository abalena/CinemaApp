import React from 'react';
import FilmEditor from './FilmEditor.jsx';
import ListOfFilms from './ListOfFilms.jsx';
import FilmsStore from '../stores/FilmsStore.js';
import FilmsActions from '../actions/FilmsActions.js';
import Search from './Search.jsx';
import UploadFile from './UploadFile.jsx';

function getStateFromFlux(){
  return{
    isLoading: FilmsStore.isLoading(),
    films: FilmsStore.getFilms()
  };
}

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = getStateFromFlux();
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount(){
    FilmsActions.loadFilms();
  }

  componentDidMount(){
    FilmsStore.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    FilmsStore.removeChangeListener(this._onChange);
  }

  handleFilmAdd(data){
    FilmsActions.addFilm(data);
  }

  handleFilmDelete(film){
    FilmsActions.deleteFilm(film.id);
  }

  handleFilmSearch(data){
    FilmsActions.filmSearch(data)
  }

  handleFileUpload(data){
    FilmsActions.uploadFile(data)
  }

  render(){
    return(
      <div className='App'>
        <FilmEditor onFilmAdd={this.handleFilmAdd} />
        <UploadFile onFileUpload={this.handleFileUpload} />
        <Search onFilmSearch={this.handleFilmSearch} />
        <ListOfFilms films={this.state.films} onFilmDelete={this.handleFilmDelete} />
       </div>
     );
  }

  _onChange(){
    this.setState(getStateFromFlux());
  }
};
