// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
}
sayHello()
function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}
function sayHelloToLiz() {
    console.log("Hello, Liz!");
}
function sayHelloToSamip() {
    console.log("Hello, Samip!");
}
function doSomething(thing) {
    console.log(thing);
}
function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}
function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}
function say1(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}
function add(x, y) {
    return x + y;
}
function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
}
console.log(add(1, 2));
console.log(say("Howdy", "partner"));
//sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
//sayHelloTo("Jane"); // "Hello, Jane!"
//sayHelloTo("R2-D2"); // "Hello, R2-D2!"
//sayHelloTo(1);

doSomething("anything");
sayHelloToGuadalupe()
sayHelloToLiz();
sayHelloToSamip();
