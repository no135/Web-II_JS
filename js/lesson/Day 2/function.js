function greet(name1) {  
    console.log(`Hello , `+name1);

}
let name1 = "Hanna";
greet(name1);
function swap(a,b) {
    let temp = a;
    a = b;
    b = temp;
    console.log(a,b);
}
let swap = b => {
    let temp = a;
    a = b;
    b = temp;

    return [a, b]
}
let a = function (a, b) {
    let temp = a;
    a = b;
    b = temp;
}
a();
console.log(5,10);
