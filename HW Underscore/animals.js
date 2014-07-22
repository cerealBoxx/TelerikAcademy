(function(){
	if(typeof require !== "undefined") {
		_ = require('./libs/underscore.js');
	}

// 	4.Write a function that by a given array of animals, 
// groups them by species and sorts them by number of 
// legs
	
	var AnimalRepository = (function(){
		function Animal(name,species, numOfLegs) {
			this.name = name;
			this.species = species;
			this.numOfLegs = numOfLegs;
		}

		var animals = [
			new Animal('Huey','duck', 2),
			new Animal('Rocinante','horse',4),
			new Animal('Dumbo','elephant',4),
			new Animal('Bolt','horse',4),
			new Animal('Duwey','duck',2),
			new Animal('Louie','duck',2),
			new Animal('Woolfie','wolf',4),
			new Animal('Pesho','human',2),
			new Animal('Goro','centipede',100)
		];

		var groupedBySpecies = _.groupBy(animals,'species');

		//onsole.dir(groupedBySpecies);c

		var sortedByNumLegs = _.sortBy(groupedBySpecies, function(animal) {

			return animal[0].numOfLegs;
		});

		console.dir(sortedByNumLegs);

		var totalLegs = 0;

		_.each(animals, function(animal) {
			totalLegs +=animal.numOfLegs;
		});

		console.log(totalLegs);
	}());
}());