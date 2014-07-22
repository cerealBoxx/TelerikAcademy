// 7. By an array of people find the most common first and 
// last name. Use underscore.

(function (argument) {
	if(typeof require !== "undefined") {
		_ = require('./libs/underscore.js');
	}

	var Person = (function() {
		function Person(firstname, lastname) {
			this.firstname = firstname;
			this.lastname = lastname;
		}

		var people = [
			new Person("Pesho","Borisov"),
			new Person("Gosho","Ivanov"),
			new Person("Cecka", "Cacheva"),
			new Person("Bojko","Borisov"),
			new Person("Ivan","Ivanov"),
			new Person('Ceco','Ivanov'),
			new Person('Ceco','Petrov')
		];

		var groupByFName = _.groupBy(people, 'firstname');
		console.log(groupByFName);

		var maxFName = _.max(groupByFName, function(p) {
			return p.length;
		})

		console.log(maxFName[0].firstname);

		var groupByLName = _.groupBy(people, 'lastname');
		console.log(groupByLName);

		var maxLName = _.max(groupByLName, function(p) {
			return p.length;
		})

		console.log(maxLName[0].lastname);


	}());
}());