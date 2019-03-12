import React from 'react';

export default class Film extends React.Component{
    render() {
        return (
            <div>
                <span onClick={this.props.onDelete}> × </span>
                <h4>{this.props.title}</h4>
                <div>{this.props.children}</div>
            </div>
        );
    }
}
