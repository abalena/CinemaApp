import React from 'react';

import '../style/style.css';

export default class FilmEditor extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      year:'',
      format: '',
      stars: ''
    };

  };

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  };
  handleYearChange = (event) => {
    this.setState({year: event.target.value});
  };
  handleFormatChange = (event) => {
    this.setState({format: event.target.value});
  };
  handleStarsChange = (event) => {
    this.setState({stars: event.target.value});
  };
  handleFilmAdd = () => {
    const newFilm = {
      title: this.state.title,
      year: this.state.year,
      format: this.state.format,
      stars: this.state.stars
    };

    this.props.onFilmAdd(newFilm);
    this.setState({title: '', year: '', format: '', stars: ''});
  };
  render(){
    return(
      <div className='FilmEditor'>
        <h2>FilmEditor</h2>
        <input
          type='text'
          placeholder='Enter title'
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <input
          type='text'
          placeholder='Enter year'
          value={this.state.year}
          onChange={this.handleYearChange}
        />
        <input
          type='text'
          placeholder='Enter format'
          value={this.state.format}
          onChange={this.handleFormatChange}
        />
        <input
          type='text'
          placeholder='Enter stars'
          value={this.state.stars}
          onChange={this.handleStarsChange}
        />
        <button
          onClick={this.handleFilmAdd}
        >
          Add
        </button>
      </div>
    )
  }
}
