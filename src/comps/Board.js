import React, { Component } from 'react'
import Tile from './Tile'

class Board extends Component {
	constructor(props) {
		super(props)

		this.clickHandler = this.clickHandler.bind(this)
	}
	clickHandler() {
		this.props.saveHandler(this.props.index)
	}
	render() {
		return (
			<div className="board">
				<div className="tiles">
					{this.props.display.map((a, i) => (
						<Tile key={i} status={a} color={this.props.color} boardIndex={this.props.index} index={i} tileHandler={this.props.tileHandler} />
					))}
				</div>
				<button onClick={this.clickHandler}>Zapisz</button>
			</div>
		)
	}
}

export default Board
