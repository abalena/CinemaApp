import React from 'react';

import '../style/style.css';

export default class ListOfFilms extends React.Component{
  generateFilmList() {
    const {films} = this.props;
    return films.map(film => {
      return (
          <li key={film.id}>{film.title}</li>
      )
    })
  }
  render(){
    return(
      <div>{this.generateFilmList()}</div>
    )
  }
}
