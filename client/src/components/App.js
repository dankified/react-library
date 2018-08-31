import React, { Component } from 'react'
import BookShelf from './BookShelf';

class App extends Component {
	constructor() {
		super();
		this.state = {
			books: [],
			categories: []
		}
	}

	componentDidMount() {
		let arrayOfBooks = [{title: "Moby Dick", author: "Herman Melville", pages: 600, genre: ["Adventure", "Fiction"]}, {title: "Harry Potter", author: "J.K Rowling", pages: 400, genre: ["Adventure", "Fantasy"]}, {title: "War and Peace", author: "Leo Tolstoy", pages: 9000, genre: ["Historical Fiction"]}, {title: "Awakening the Giant Within", author: "Tony Robbins", pages: 300, genre: ["Self Improvement", "Non Fiction"]}];

		this.setState({books: arrayOfBooks, categories: ['Adventure', 'Fiction', 'Fantasy', 'Historical Fiction', 'Self Improvement','Non Fiction']});
	}

	render() {
		return (
			<div>
				{
					this.state.categories.map(
						(category, index) => <BookShelf books={this.state.books} category={category} key={`bookShelf${index}`}/>
					)
				}
			</div>
		)
	}
}

export default App;