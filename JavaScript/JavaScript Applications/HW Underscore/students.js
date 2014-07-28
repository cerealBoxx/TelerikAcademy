(function () {
	if(typeof require !== 'undefined') {
		_ = require('./libs/underscore.js');
	}

	var markToString = function() {
		return this.subject + ": " + this.mark;
	}


	var Student = Object.create({
		init: function (fname, lname, age) {
			this.fname = fname;
			this.lname = lname;
			this.fullname = this.fname + ' '+ this.lname;
			this.age = age;
			this.marks = [];
			this.addMark = function (subject, mark) {
				this.marks.push({
					subject: subject,
					mark: mark,
					toString: markToString
				});
				return this;
			};
			return this;
		},
		toString: function () {
			return this.fullname;
		}
	});

	

	var students = [Object.create(Student).init('Doncho', 'Minkov', 19),
	Object.create(Student).init('Nikolay', 'Kostov', 15),
	Object.create(Student).init('Aneliya', 'Stoyanova',23),
	Object.create(Student).init('Ivaylo', 'Kenov',2),
	Object.create(Student).init('Todor', 'Stoyanov',56),
	Object.create(Student).init('A', 'B')
	];

	var subjects = ["German","Programming","Physics"];

// 	1. Write a method that from a given array of students 
// finds all students whose first name is before its last 
// name alphabetically. Print the students in 
// descending order by full name. Use Underscore.js

var filteredByName = _.filter(students, function(s) {
	return s.fname < s.lname;
} );

var sortDescending = _.sortBy(filteredByName, 'fullname').reverse();

console.log(filteredByName.join(', '));
console.log('Filtered by first name and alphabetically descending \n')
console.log(sortDescending.join(', '));

// 2.Write function that finds the first name and last 
// name of all students with age between 18 and 24. 
// Use Underscore.js

var studentsWithinRequiredAge = _.filter(students, function(s) {
	return s.age<25 && s.age >=18;
});

console.log(studentsWithinRequiredAge.join(', ')+"\n");

// Write a function that by a given array of students 
// finds the student with highest marks
var mark,
subject;

for(var subject=0;subject<subjects.length;subject++) {
	for(var s = 0; s<students.length;s++) {
		mark = Math.floor(Math.random()*5+2);
		students[s].addMark(subjects[subject],mark);
	}
}

var studentsByScore = _.map(students, function(student) {
	var overallScore = 0,
	bestScore = 0,
	currBestStud = {};
	_.each(student.marks, function(mark) {
		overallScore+=mark.mark;
	});

	return {
		name: student.fullname,
		score: (overallScore / student.marks.length).toFixed(2)
	}
});

	studentsByScore = _.sortBy(studentsByScore,'score');
	var best = _.last(studentsByScore);

	console.dir(studentsByScore);
	console.log(best);



}());