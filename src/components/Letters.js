import React, { Component } from 'react';
import Letter from './Letter'

class Letters extends Component{
    render(){
        let letters = ['A']
        return (
            <div>
                <div>Available Letter</div>
                {Object.entries(this.props.letterStatus).map(l => <Letter letter={l[0]} status={l[1]} key={l[0]} />)}
            </div>
        )
    }
}

export default Letters;