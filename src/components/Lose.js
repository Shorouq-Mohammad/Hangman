import React, { Component } from 'react'

export default class Lose extends Component {
    newGame = () => this.props.gameEnd()
    render() {
        return (
            <div className='lose'>
                <h4>You Lost</h4>
                <button onClick={this.newGame}>New Game</button>
            </div>
        )
    }
}
