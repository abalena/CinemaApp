import React from 'react';

export default class Film extends React.Component{
    render() {
        return (
            <div>
                <button onClick={this.props.onFilmDelete}> × </button>
                <h4>{this.props.title}</h4>
                <div>{this.props.children}</div>
            </div>
        );
    }
}
