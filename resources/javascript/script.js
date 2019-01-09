function sayHello() {
	console.log("Hello");
}

var sayBye = function () {
	console.log("Bye");
}

function sing() {
	console.log("AHHH");
	console.log("TEEE");
}

// sing();

function sing(song) {
	console.log(song);
}

function multiply(a, b) {
	if (a > 10 || b > 10) {
		return "those are larger number than I was expecting";
	} else {
		return a*b;
	}
}

sayHello();

sayBye();

sing("La");
sing("de");
sing("da");

console.log("Now multiplying 9 and 5");
console.log(multiply(9,5));
console.log("Now multiplying 11 and 4");
console.log(multiply(11, 4));

// var age = prompt("What is your age?");

// if (Number(age) < 18) {
// 	alert("Sorry, you are too young to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }

//function declaration
function checkDriverAge() {
	var age = prompt("What is your age?");

	if (Number(age) < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

//function expression
var checkDriverAge2 = function() {
	var age = prompt("Second check. What is your age?");

	if (Number(age) < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

function checkDriverAge3(age) {
	if (Number(age) < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

checkDriverAge();

checkDriverAge2();

















