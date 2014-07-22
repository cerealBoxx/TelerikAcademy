(function () {

// 6.	By a given collection of books, find the most popular 
// author (the author with the highest number of 
// books)

	var BookRepository = (function(){

		if (typeof require !== 'undefined') {
		//load underscore if on Node.js
		_ = require('./libs/underscore.js');
	}

		function Book(author, title) {
			this.author = author;
			this.title = title;
		}

		var books = [
			new Book('George R.R. Martin','A Game of Thrones'),
			new Book('George R.R. Martin','A Clash of Kings'),
			new Book('George R.R. Martin','A Storm of Swords'),
			new Book('George R.R. Martin','A Feast for Crows'),
			new Book('Haruki Murakami', '1Q84'),
			new Book('Brandon Sanderson', 'The Way of Kings'),
			new Book('Suzanne Collings', 'The Hunger Games'),
			new Book('Suzanne Collings', 'Mockingjay'),
			new Book('Suzanne Collings', 'Catching Fire')
		];

		var booksByAuthor = _.groupBy(books, 'author');

		var mostFamousAuthor = _.max(booksByAuthor, function(books) {
			return books.length;
		})

		console.log(mostFamousAuthor[0].author);


	}());
}());