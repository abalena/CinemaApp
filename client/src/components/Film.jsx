import React from 'react';

import "../style/style.css";

export default class ListOfFilms extends React.Component{
  constructor(props){
    super(props)
    this.film = null;

    this.state = {
      showInfo: false,
    }

    this.showInfo = this.showInfo.bind(this)
    this.closeInfo = this.closeInfo.bind(this)
  }

  onDelete = () => {
    this.props.onFilmDelete(this.film);
    this.film = null;
  }

  showInfo(event){
    event.preventDefault();
    this.setState({ showInfo: true }, () => {
      document.addEventListener('click', this.closeInfo);
    });
  }

  closeInfo() {
    this.setState({ showInfo: false }, () => {
      document.removeEventListener('click', this.closeInfo);
    });
  }

  render(){
    this.film = this.props.tempFilm;
    return(
      <div className="Film">
        <button onClick={this.onDelete}> × </button>
        <span onClick={this.showInfo}>{this.film.title}</span>
        {
          this.state.showInfo
            ? (
                <div>
                  <div>{this.film.year}</div>
                  <div>{this.film.format}</div>
                  <div>{this.film.stars}</div>
                </div>
          )
          : (
            null
          )
        }
      </div>
    )
  }
}
