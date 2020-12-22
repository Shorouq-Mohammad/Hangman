import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component{
    render(){
        let i =0
        return (
            <div className="solution">
                <div>
                {[...this.props.solution.word].map((c,i)=> this.props.letterStatus[c] ? <Letter letter={c} key={i}/> : <Letter letter='_' key={i++} />)}
                </div>
                <div className="hint"><em>{this.props.solution.hint}</em></div>
            </div>
        )
    }
}

export default Solution;