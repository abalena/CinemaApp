import React from 'react';

export default class ListOfFilms extends React.Component{
  constructor(props){
    super(props)
    this.film = null;
  }
  onDelete = () => {
    this.props.onFilmDelete(this.film);
    this.film = null;
  }
  render(){
    this.film = this.props.tempFilm;
    return(
      <div>
        <button onClick={this.onDelete}> × </button>
        <span>{this.film.title}</span>
      </div>
    )
  }
}
