// Methods are actions that can be performed on objects.
// Object properties can be both primitive values, other objects, and functions.
// An object method is an object property containing a function definition.

// JavaScript objects are containers for named values, called properties and methods.

// Initialize an object with properties and methods - create method.
const person = {
    firstName: 'Abhishek',
    lastName: 'Pujara',
    contactNo: "9227608599",
    isAvailable:true,
    showPersonDetails() {
        const accepting = this.isAvailable ? "Yes he is." : "Nope, he is not.";
        document.write("The "+ this.firstName +" "+ this.lastName +" ("+this.position+") - "+ this.contactNo +" is available:"+ accepting+" age of a founder is:"+ this.age);
    }
};
try{
// Use Object.create to pass properties
const founder = Object.create(person);
founder.position = "Founder & Executive Chairman";
founder.showPersonDetails();

const coFounder=Object.create(founder);
coFounder.showPersonDetails();

const coFounder2=Object.create(coFounder);
founder.age = 30;
coFounder.showPersonDetails();
}
catch (err) {
    document.write(err);
  }
// ----------------------------------------------------------------------------------------------------------------------------------------

// As Object.keys converts your object’s keys into an array of keys, the forEach() array method can be used to iterate through the keys and values.
// Access object keys - keys method.
const roles = {
	founder: 'Abhishek Pujara',
	coFounder: 'Nidhi Pujara',
	managingDirector: 'Jay Poojara',
};

// Get the keys of the object
const keys = Object.keys(roles);
document.write("<br/>"+keys);

// Get the values of the object
const values = Object.values(roles);
document.write("<br/>"+values);

// Iterate through the keys
Object.keys(roles).forEach(key => {
    let value = roles[key];
    document.write("<br/>"+key+":"+value);
});

// ----------------------------------------------------------------------------------------------------------------------------------------
// Object.entries() creates a nested array of the key/value pairs of an object.
const technicalRoles = {
	js: 'Abhishek Pujara',
	php: 'Nidhi Pujara',
	mobileApps: 'Jay Poojara',
};

// Get the object key/value pairs
const nestedRoles = Object.entries(technicalRoles);
document.write("<br/>"+nestedRoles);

// Loop through the entries results
nestedRoles.forEach(nestedRole => {
    let key = nestedRole[0];
    let value = nestedRole[1];

    document.write("<br/>"+key+":"+value);
});

// ----------------------------------------------------------------------------------------------------------------------------------------
// Object.assign() is used to copy values from one object to another.

// Object 1
const personName = {
    firstName: 'Abhishek',
    lastName: 'Pujara'
};

// Object 2
const personRole = {
    designation: 'founder',
    company: 'Sky9 I.T. Craft'
};

// Merge the objects
const profile = Object.assign(personName, personRole);
document.write("<br/>"+JSON.stringify(profile));

// Merge the object with the spread operator.
// This spread syntax in object literals is also known as shallow-cloning.
const profileSpread = {...personName, ...personRole}
document.write("<br/>"+JSON.stringify(profileSpread));


// ----------------------------------------------------------------------------------------------------------------------------------------
// Object.freeze() prevents modification to properties and values of an object, and prevents properties from being added or removed from an object.

const user = {
	username: 'abhishekpoojara@gmail.com',
	password: 'abc123XYZ'
};

// Freeze the object
const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

document.write("<br/>"+JSON.stringify(newUser));


// ----------------------------------------------------------------------------------------------------------------------------------------
// Object.seal() prevents new properties from being added to an object, but allows the modification of existing properties.

const userRecord = {
	username: 'abhishekpoojara@gmail.com',
	password: 'abc123XYZ'
};

// Seal the object
const newUserRecord = Object.seal(userRecord);

newUserRecord.password = '*******';
newUserRecord.active = true;

document.write("<br/>"+JSON.stringify(newUserRecord)+"<br/>");

// ----------------------------------------------------------------------------------------------------------------------------------------
// Object.getPrototypeOf() is used to get the internal hidden [[Prototype]] of an object, also accessible through the __proto__ property.

const persons = ['ABC', 'DEF', 'GHI', 'JKL'];
document.write("<br/>"+Object.getPrototypeOf(persons)===Array.prototype);
