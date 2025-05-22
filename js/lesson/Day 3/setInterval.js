function sayHello(){
    console.log("Hello");
}
clearInterval(setInterval(sayHello, 1000));

setTimeout(sayHello, 5000);
console.log('hello world');