import React from 'react';
import {Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import '../style/style.css';
import Film from './Film.jsx';

const history = createBrowserHistory();

export default class ListOfFilms extends React.Component{

  generateFilmList() {
    const {films} = this.props;
    return films.map(film => {
      return (
        <Film key={film.id} onFilmDelete={this.props.onFilmDelete} tempFilm={film}></Film>
      )
    })
  }
  render(){
    return(
      <div>
        <h4>List of films:</h4>
        <h5>To see more information about the film click on the title of this film</h5>
        <div>{this.generateFilmList()}</div>
      </div>
    )
  }
}
