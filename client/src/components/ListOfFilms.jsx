import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
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
      <Router history={history}>
        <div className="ListOfFilms">
          <h4>List of films:</h4>
          <div>{this.generateFilmList()}</div>
        </div>
      </Router>
    )
  }
}
