import React, { Component } from 'react';

class Letter extends Component{

    render(){
        return (
            <div className="letter">
                {this.props.status ? <span className="true">{this.props.letter} </span> : 
                <span className="false">{this.props.letter} </span>}
            </div>
        )
    }
}

export default Letter;