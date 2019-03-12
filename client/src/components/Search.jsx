import React from 'react';

export default class Search extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      search: ''
    };
  }
  handleSearchChange = (event) => {
    this.setState({search: event.target.value});
  };
  handleFilmSearch = () => {
    this.props.onFilmSearch(this.state);
    this.setState({search: ''});
  }
  render(){
    return(
      <div>
      <input
        type="text"
        placeholder="Enter title or actor"
        value={this.state.search}
        onChange={this.handleSearchChange}
      />
      <button onClick={this.handleFilmSearch}>OK</button>
      </div>
    )
  }
}
