import React, { Component } from 'react';

class Score extends Component{
    assignClass(){
        let assignedClass
        if(this.props.score > 80){
            assignedClass = "high-score"
        }else if(this.props.score > 50){
            assignedClass = "medium-score"
        }else{
            assignedClass = "low-score"
        }
        return assignedClass
    }
    render(){
        return (
            <div className={this.assignClass()}>
                {this.props.score}
            </div>
        )
    }
}

export default Score;