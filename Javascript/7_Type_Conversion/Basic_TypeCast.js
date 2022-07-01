// JavaScript variables can be converted to a new variable and another data type:
// By the use of a JavaScript function automatically by JavaScript itself.
// Converting Strings to Numbers
// Converting Numbers to Strings
// Converting Dates to Numbers
// Converting Numbers to Dates
// Converting Booleans to Numbers
// Converting Numbers to Booleans

// The global method Number() can convert strings to numbers.
// Empty strings convert to 0.
// Anything else converts to NaN (Not a Number).

document.write("<br/>"+Number("3.14787868"));    // returns 3.14
document.write("<br/>"+Number(" "));       // returns 0
document.write("<br/>"+Number(""));        // returns 0
document.write("<br/>"+Number("99 88"));   // returns NaN


// The global method String() can convert numbers to strings.
let num = 111;
let s=String(100 + 23);
document.write("<br/>"+String(num));
document.write("<br/>"+String(123));
document.write("<br/>"+String(s+100 +23));
document.write("<br/>"+String("100" + "23")+String("100" + "23"));

// The Number method toString() does the same it convert numbers to strings.
document.write("<br/>"+num.toString());
document.write("<br/>"+String(num+num.toString()));

// The toExponential() method returns a string, with the number rounded and written using exponential notation.
let numexp = 3.14;
document.write("<br/>"+numexp.toExponential(1));
document.write("<br/>"+numexp.toExponential(2));
document.write("<br/>"+numexp.toExponential(4));
document.write("<br/>"+numexp.toExponential(6));

//The toFixed() returns a string, with the number written with a specified number of decimals.
let numfixed = 3.14;
document.write("<br/>"+numfixed.toFixed());
document.write("<br/>"+numfixed.toFixed(2));
document.write("<br/>"+numfixed.toFixed(4));
document.write("<br/>"+numfixed.toFixed(6));

//The toPrecision() method returns a string, with a number written with a specified length.
let numPrec = 3.14;
document.write("<br/>"+numPrec.toPrecision());
document.write("<br/>"+numPrec.toPrecision(2));
document.write("<br/>"+numPrec.toPrecision(4));
document.write("<br/>"+numPrec.toPrecision(6));

// The valueOf() method returns a number as a number.
// The valueof() method in JavaScript is used to return the primitive value of a number. This method is usually called internally by JavaScript and not explicitly in web code. Return Value: The valueof() method in JavaScript returns a number representing the primitive value of the specified Number object.
// Primitive values are immutable — they cannot be changed after being created. Object references, however, are mutable and can be changed.
// Wait till react props & state for exact demo. it works with function parameters like out and ref.
let val = 3.14;
document.write("<br/>"+val.valueOf());
val = 3.20;
document.write("<br/>"+val);

// Number, parseInt, parseFloat.
document.write("<br/>"+Number(true));
document.write("<br/>"+Number(false));
document.write("<br/>"+Number("11"));
document.write("<br/>"+Number(" 11"));
document.write("<br/>"+Number("11 "));
document.write("<br/>"+Number(" 11 "));
document.write("<br/>"+Number("11.33"));
document.write("<br/>AAAA:"+Number("11,33"));
document.write("<br/>"+Number("11 33"));
document.write("<br/>"+Number("ABC"));
document.write("<br/>"+Number(new Date("1970-01-01")));

document.write("<br/>MIN_VALUE, MAX_VALUE, POSITIVE_INFINITY, NEGATIVE_INFINITY");
// Number Properties Cannot be Used on Variables.
//Max number possible in JS.
document.write("<br/>"+Number.MAX_VALUE);

//Min number possible in JS.
document.write("<br/>"+Number.MIN_VALUE);
//1 / 0;
document.write("<br/>"+Number.POSITIVE_INFINITY);

//-1 / 0;
document.write("<br/>"+Number.NEGATIVE_INFINITY);

// parseInt()
document.write("<br/>"+parseInt("-10"));
document.write("<br/>"+parseInt("-10.33"));
document.write("<br/>"+parseInt("10"));
document.write("<br/>"+parseInt("10.33"));
document.write("<br/>"+parseInt("10 20 30"));
document.write("<br/>"+parseInt("years is:10"));

// parseFloat()
document.write("<br/>"+parseFloat("-10"));
document.write("<br/>"+parseFloat("-10.33"));
document.write("<br/>"+parseFloat("10"));
document.write("<br/>"+parseFloat("10.33"));
document.write("<br/>"+parseFloat("10 20 30"));
document.write("<br/>"+parseFloat("10 years"));

// Array Prototype
// Convert the individuals in array element with uppercase.
Array.prototype.upperCase = function() {
    var i;
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};
 
function demoArr() {
    var cars = ["bmw", "ferrari"];
    document.write("<br/>"+cars); 
    cars.upperCase();
    document.write("<br/>"+cars); 
    document.write("<br/>"+cars); 
    document.write("<br/>"+cars); 

    var bikes = ["bullet", "kawasaki"];
    document.write("<br/>"+bikes); 
    bikes.upperCase();
    document.write("<br/>"+bikes); 
}

// Date - year, month, day, hours, minutes, seconds, milliseconds
document.write("<br/>"+new Date()); // Default is Full String Format.
document.write("<br/>"+new Date("1970-01-01"));
document.write("<br/>"+new Date(2018, 11, 24, 10, 33, 30, 0));
document.write("<br/>"+new Date("October 13, 2014 11:13:00"));

var d = new Date();
document.write("<br/>"+d.toString());
document.write("<br/>"+d.toUTCString());
document.write("<br/>"+d.toDateString());
document.write("<br/>"+d.toISOString());

document.write("<br/>"+d.getTime()); // In Miliseconds
document.write("<br/>"+d.getDate()); 
document.write("<br/>"+d.getDay()); 
document.write("<br/>"+d.getFullYear()); 
document.write("<br/>"+d.getHours()); 
document.write("<br/>"+d.getMonth()); 

document.write("<br/>"+d.getDay()+"/"+d.getMonth()+"/"+d.getFullYear()); // Custom Format.



