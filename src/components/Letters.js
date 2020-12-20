import React, { Component } from 'react';
import Letter from './Letter'

class Letters extends Component{
    render(){
        let letters = ['A']
        return (
            <div>
                <div>Available Letter</div>
                {letters.map(l => <Letter />)}
            </div>
        )
    }
}

export default Letters;