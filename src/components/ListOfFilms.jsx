import React from 'react';
import Film from './Film.jsx'

export default class ListOfFilms extends React.Component{
  render(){
    console.log("ListOfFilms.render");
    const films = this.props.films.map(film => {
      <ul key={film.id}> {film.title}</ul>
    })
    for(let i = 0; i < films.length; i++){
      films[i] =  this.props.films[i].title;
      console.log("FilmsLena: " + films[i]);
    }
    return(

      <div>
        <h3>List of films</h3>
        {films}
      </div>
    )
  }
}
