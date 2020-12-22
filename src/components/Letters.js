import React, { Component } from 'react';
import Letter from './Letter'

class Letters extends Component{
    render(){
        let letters = ['A']
        return (
            <div>
                <div className="available">Available Letters</div>
                <div className='allLetters'>
                {Object.entries(this.props.letterStatus).map(l => <Letter letter={l[0]} status={l[1]} key={l[0]} selectLetter={this.props.selectLetter}/>)}
                </div>
            </div>
        )
    }
}

export default Letters;