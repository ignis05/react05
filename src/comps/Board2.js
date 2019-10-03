import React, { Component } from 'react'
import Tile from './Tile'

class Board2 extends Component {
	render() {
		return (
			<div className="tiles">
				{this.props.display.map((a, i) => (
					<Tile key={i} status={a} color={this.props.color} boardIndex={this.props.index} index={i} tileHandler={this.props.tileHandler} />
				))}
			</div>
		)
	}
}

export default Board2
