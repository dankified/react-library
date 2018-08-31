import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
	render() {
		let bookArr = [];
		this.props.books.forEach((book) => {
			if(book.genre.includes(this.props.category))
				bookArr.push(book);
		})
		return (
		<div>
			<p>Category: {this.props.category}</p>
			{bookArr.map((book, index) => <Book book={book} key={index}/>)}
			<br />
		</div>
		)
	}
}

export default BookShelf;