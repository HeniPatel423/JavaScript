// This is a real-life analogy for things we often have in programming:

// A “producing code” that does something and takes time. For instance, some code that loads the data over a network. That’s a “singer”.
// A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result. These are the “fans”.
// A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.
    

//Promise.then() takes two arguments, a callback for success and another for failure.
//Both are optional, so you can add a callback for success or failure only.

// Normal
    const promiseDemo = new Promise(function(Success, Failure) {
      Success(); // when successful
      Failure();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise).
    promiseDemo.then(
      function(value) { document.write("Success.") },
      function(error) { document.write("Fail.") }
    );


// Timer
    let promiseDemo3 = new Promise(function(myResolve) {
    setTimeout(function() { myResolve("God Is Great"); }, 3000);
  });
  
  promiseDemo3.then(function(value) {
    document.write("<br/>"+value);
  });