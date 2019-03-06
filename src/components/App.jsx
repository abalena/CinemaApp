import React from 'react';
import FilmEditor from './FilmEditor.jsx';
import ListOfFilms from './ListOfFilms.jsx';
import FilmsStore from '../stores/FilmsStore.js';
import FilmsActions from '../actions/FilmsActions.js';

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

  render(){
    return(
      <div className='App'>
        <h1>Films</h1>
        <FilmEditor onFilmAdd={this.handleFilmAdd} />
        <ListOfFilms films={this.state.films} />
       </div>
     );
  }

  _onChange(){
    this.setState(getStateFromFlux());
  }
};
