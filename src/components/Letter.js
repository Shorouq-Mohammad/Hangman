import React, { Component } from 'react';

class Letter extends Component{
    selectLetter = () =>{
        this.props.selectLetter(this.props.letter)
    }
    render(){
        return (
            <div className="letter">
                {this.props.status ? <span className="true">{this.props.letter} </span> : 
                <span className="false" onClick={this.selectLetter}>{this.props.letter} </span>}
            </div>
        )
    }
}

export default Letter;