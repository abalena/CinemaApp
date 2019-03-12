import React from 'react';
import Film from './Film.jsx';
import '../style/style.css';

export default class ListOfFilms extends React.Component{

  constructor(props){
    super(props)
    this.onDelete = this.props.onFilmDelete.bind(this);
}

  generateFilmList() {
    const {films} = this.props;
    return films.map(film => {
      return (
          <li key={film.id} onDelete={film}>{film.title}</li>
      )
    })
  }
  render(){
    return(
      <Film>{this.generateFilmList()}</Film>
    )
  }
}
