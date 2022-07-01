// var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped. It can be said that a variable declared with var is defined throughout the program as compared to let.

// calling x after definition
var x = 5;
document.write(x, "\n");

// calling y after definition 
let y = 10;
document.write(y, "\n");

// calling var z before definition will return undefined
document.write(z, "\n");
var z = 2;

// calling let a before definition will give error
document.write(a);
let a = 3;

const c = 3;
c=10;
document.write(c);
c=100;
document.write(c);