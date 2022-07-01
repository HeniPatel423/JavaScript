// JSON = Javascript Object Notation


//Primitive Datatype

var Num=100;
var Str="Abhishek Pujara";
var BooleanVar=true;


document.write("<br/>",Num);
document.write("<br/>",Str);
document.write("<br/>",BooleanVar);

// TypeOf
document.write("<br/>",typeof(BooleanVar));


//Non-Primitive Datatype
// 1. Object: Object in Javascript is an entity having properties and methods. Everything is an object in javascript.

// Create an empty generic object
var obj = new Object();
document.write("<br/>"+typeof(obj));
document.write("<br/>"+obj.FirstName+" "+obj.LastName);


// Create a user defined object
var car = {
    modal: "BMW X3",
    color: "white",
    doors: 5
}
document.write("<br/>"+car.modal+" "+car.color+" "+car.doors);

// Array datatype
var cars = ["BMW", "Mercedes-Benz", "Volkswagen"];
document.write("<br/>"+cars[0]);
document.write("<br/>"+cars[1]);
document.write("<br/>"+cars[2]);


// Function datatype
var Demo = function(){ 
    return "Hello World!"; 
}
document.write("<br/>"+typeof(Demo));
document.write("<br/>"+Demo());



