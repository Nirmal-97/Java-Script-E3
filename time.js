// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 10);
// }

// let a = Math.floor(Math.random() * 10);
// console.log(a);

// let a=
//     {
//         name: "nirmal",
//         id: 1
//     }
// console.log(a.length);


// let array = [1, 2, 3, 4];
// let sum = 0

// for (let i = 0; i < array.length; i++) {
//     sum += array[i]
// }
// console.log(sum);

// let a = 10
// b = toString(a)
// console.log(typeof(b));

//  var a = null ;
// console.log(a);"Nirmal";
// console.log(123 + "nirmal");
// console.log(123 + 78);
// let a = "nirmal"
// console.log(--a);

// let x ;
// console.log(x);

// if (x == undefined) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }
// let a = "Nirmal";
// console.log(-a);

//spread operator
// function sum(a, b, c) {
//     return a + b + c;
// }
// const num = [1, 2, 3];
// console.log(sum(...num));

// let a = [2, 3, 4, 5, 6];
// for (i = o,i<a.length,i++) {
//     let sum = sum + i;
// }
// console.log(sum);
// function a(sum) {
//     return sum ;
// }
// console.log((10));

// function a() {
//     return{
//         name:"priya"
//     }
// }
// function b() {
//     return{
//         name:"ragu"
//     }
// }
// console.log(a());
// console.log(b());

//
// if (null || undefined || 0 || "" || false || NaN) {
//     console.log("false");
// }

// if ("hello" && 1 && true) {
//     console.log("true");
// }

// function order(sideDish) {
//     if (sideDish === undefined) {
//         sideDish = "nothing";
//     }
//         console.log(`I ordered ${sideDish}`);
// }

// order("Noodles");
// order();

// {
//     var apple = 1;
// }
// console.log(apple);

// hello("Hello World");
// function hello(world) {
//     console.log(world);
// }

// let a = [2, 33, 44, 55, 66,66];
// let b = 0;
// for (let i = 0; i<a.length; i++){
//     b += a[i];
// }
// console.log(b);

// for (let x = 0; x < 3; x++)

//     for (let y = 0; y < 3; y++)

//         console.log(x, y);

// let a = ['apple', 'orange', 'pineapple'];
// console.log(a);

// let a = [22, 33, 444, 55];
// let b = a.map(a => a + 1);
// let b  = a.reduce()
// console.log(b);
// console.log(a);

// let myArray = [1, 2, 3, 4];

// const returnValue = myArray.forEach((element) => {
//     return element * element;
// });
// console.log(returnValue);

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);
// console.log(result);

// function checkAdult(age) {
//     return age >= 18;
// }

// let a = [30, 40, 50, 60, 70];
// let b = a.filter(c);
// console.log(b);

// function c(a) {
//     return a >= 40;
// }

// let b = []
// for (let i = 0; i < 1; i++) {
//     d = b * a[i];
//     // c.push(d);
// }
// console.log(c);

// let a = [1, 2, 3, 4];
// let b = ;
// console.log(b);

// let b = [];
// for (let i = o; i < a.length; i++){

// }
// console.log(b);

//let a = [1, 2, 3, 4];
// let b = a[0] * a[1];
// let c = b * a[2];
// let d = c * a[3];
// console.log(d);

// for (let i = o; i < 3; i++){
// }



// let a = [1, 2, 3, 4];
// let b;

// for (let j = 0; j < 1; j++){
//     b=a[j]*a[j+1]
// }
// for (let i = 2; i < a.length; i++){
//     b = b * a[i];
// }
// console.log(b);




// const array1 = [1, 2, 3, 4];
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// var a
// const sumWithInitial = array1.reduce(
//     (previousValue, currentValue) => {
//         console.log("previousValue", previousValue);
//         console.log("currentValue-----", currentValue);

//         a = previousValue + currentValue;
//         return a
//     },
//     initialValue
// );
// console.log(sumWithInitial);
// expected output: 10

// let a = 1000000110000000;
// let b = a.toString().split("");
// console.log(b);
// let c = 0
// for (let i = 0; i < b.length; i++){
//     if (b[i] == 0) {
//         c=c+1;
//     }
// }

// console.log(c);

// for (let i = 0; i < a.length; i++){
//     c = b=="0"
// }
//     console.count(c);

const obj = [
    {
        name: "test1",
        dep: "BE",
        score: 10
    },
    {
        name: "test1",
        dep: "BE",
        score: 20
    },
    {
        name: "test1",
        dep: "Arts",
        score: 30
    },
    {
        name: "test1",
        dep: "Arts",
        score: 40
    },

]
// let b = 0;
// let c = 0;
// obj.forEach(element => {
//     if (element.dep == "BE") {
//         b = b + element.score;
//     }
//     else {
//         c = c + element.score;
//     }
// });
// console.log(`{ BE: ${b}}`);
// console.log(`{ Arts: ${c}}`);
// console.log("Arts Score" + " " + c);
// b = 0;
// c = 0;
// obj.forEach(element => {
//     if (element.dep == "BE") {
//         b = b + element.score;
//     }
//     else {
//         c = c + element.score;
//     }
    
// });
// console.log(`{BE:${b}}`);
// console.log(c);

// let a = [2, 3, 4, 56, 41];
// a.pop()
// let b = a.pop();
// console.log(a);
// console.log(b);

// function greet(her) {
//     console.log("hello");
//     her();
//     console.log("Good Morning");
// }
// // greet();
// greet(function (){
//     console.log("Priya");
// });

// let a = 0;
// setInterval(function() {
//     console.log(a);
//     a = a + 1;
// }, 1000);

// let b = "nirmal";
// let a=function (b) {
//     console.log(b);
// }
// a(b);

// let a = [1, 2, 3, 4.4];

// a.Map(function (element) {
//     console.log(element);   
//     return (element);
// });

