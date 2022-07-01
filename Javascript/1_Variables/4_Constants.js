// The const keyword was introduced in ES6 (2015).
// Variables defined with const cannot be Redeclared.
// Variables defined with const cannot be Reassigned.
// Variables defined with const have Block Scope.

  try {
    const PI = 3.141592653589793;
    PI = 3.14;
    document.write(PI);

    //const PI = 3.141592653589793;
    //document.write(PI);
  }
  catch (err) {
    document.write(err);
  }