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
    if(event.target.value.match("^[0-9A-Za-zА-Яа-я,: ]*$") != null){
      this.setState({title: event.target.value});
    }
  };
  handleYearChange = (event) => {
    if(event.target.value.match("^[0-9]*$") != null){
      this.setState({year: event.target.value});
    }
  };
  handleFormatChange = (event) => {
    if(event.target.value.match("^[0-9A-Za-z ]*$") != null){
      this.setState({format: event.target.value});
    }
  };
  handleStarsChange = (e) => {
    if(event.target.value.match("^[A-Za-zА-Яа-я, ]*$") != null){
      this.setState({stars: event.target.value});
    }
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
        <h2>Add new film</h2>
        <input
          type='text'
          placeholder='Enter title'
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <input
          type='text'
          maxLength='4'
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
