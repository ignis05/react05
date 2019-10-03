import React, { Component } from 'react'
import './style.css'
import Board from './comps/Board'
import Board2 from './comps/Board2'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			color: 'yellow',
			boards: [
				[1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
				[1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
				[1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
				[0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
			],
			savedBoards: [],
		}
		this.selectHandler = this.selectHandler.bind(this)
		this.tileHandler = this.tileHandler.bind(this)
		this.saveHandler = this.saveHandler.bind(this)
		this.clearHandler = this.clearHandler.bind(this)
	}
	tileHandler(board, tile, data) {
		console.log(board, tile, data)
		let b = this.state.boards
		b[board][tile] = data ? 1 : 0
		console.log(b)
		this.setState({
			boards: b,
		})
	}
	saveHandler(board) {
		console.log('save from ' + board)
		let s = this.state.savedBoards
		s.push({ index: board, display: this.state.boards[board], color: this.state.color })
		console.log(s)
		this.setState({ savedBoards: s })
	}
	selectHandler(e) {
		console.log(e.target.value)
		this.setState({ color: e.target.value })
	}
	clearHandler() {
		this.setState({ savedBoards: [] })
	}
	render() {
		return (
			<div className="app">
				<div className="boards">
					<select onChange={this.selectHandler} value={this.state.color}>
						<option value="yellow">yellow</option>
						<option value="red">red</option>
					</select>
					<div className="boardGroup">
						{[0, 1, 2, 3].map(a => (
							<Board key={a} saveHandler={this.saveHandler} color={this.state.color} index={a} tileHandler={this.tileHandler} display={this.state.boards[a]} />
						))}
					</div>
				</div>
				<div className="selectedB">
					{this.state.savedBoards.map((b, i) => (
						<Board2 key={i} {...b} />
					))}
				</div>
				<button onClick={this.clearHandler} className="clear">
					Wyczysc wszystkie
				</button>
			</div>
		)
	}
}

export default App
