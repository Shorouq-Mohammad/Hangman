import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component{

    render(){
        return (
            <div>
                {[...this.props.solution.word].map(c => this.props.letterStatus[c] ? <Letter letter={c}/> : <Letter letter='_'/>)}
                <div className="hint"><em>{this.props.solution.hint}</em></div>
            </div>
        )
    }
}

export default Solution;