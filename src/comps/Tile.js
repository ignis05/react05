import React, { Component } from 'react'

class Tile extends Component {
	constructor(props) {
		super(props)

		this.clickHandler = this.clickHandler.bind(this)
	}
	clickHandler() {
		this.props.tileHandler(this.props.boardIndex, this.props.index, !this.props.status)
	}
	render() {
		return <div onClick={this.clickHandler} className="tile" style={{ background: this.props.status === 1 ? this.props.color || 'yellow' : 'white' }}></div>
	}
}

export default Tile
