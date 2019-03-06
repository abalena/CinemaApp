import React from 'react';
import Film from './Film.jsx'

export default class ListOfFilms extends React.Component{
  render(){
    return(
      <div>
        <h3>List of films</h3>
        {
          this.props.films.map(film => {
            <Film
              key={film.id}
            />
          })
        }
      </div>
    )
  }
}
