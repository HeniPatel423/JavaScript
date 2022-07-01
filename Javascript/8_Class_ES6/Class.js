// A JavaScript class is not an object.
// It is a template for JavaScript objects.

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
}
var c=new Car("BMW","2022");
document.write(c.name+" "+c.year);