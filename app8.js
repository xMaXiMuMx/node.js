//=== Non curried function
function greet(mesg) {console.log(mesg);}
function greeter(name) {return "Hello" + name;}
var mesg = greeter('John')
greet(mesg);

//==== curried function
function greeter(name) {
	var mesg = "Hello" + name;
	return function  greet() {
		console.log(mesg)
	}

}

var fn = greeter('John');
fn();
