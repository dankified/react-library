import React, { Component } from 'react'

class Book extends Component {
	render() {
		return (
			<div>
				<p>Title: {this.props.book.title}</p>
			</div>
		)
	}
}

export default Book