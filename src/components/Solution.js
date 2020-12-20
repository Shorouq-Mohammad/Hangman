import React, { Component } from 'react';

class Solution extends Component{

    render(){
        const spaces = ['_', '_', '_', '_']
        return (
            <div>
                {spaces.map(s => <span>{s} </span>)}
                <div className="hint"><em>Hint</em></div>
            </div>
        )
    }
}

export default Solution;