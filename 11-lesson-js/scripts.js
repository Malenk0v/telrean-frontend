console.log('Hello world, my name is Gleb');
console.log('JS Intro');

let x = 7;
console.log(x);
x = "bye";
console.log(x);

const pi = 3.1415926;
console.log(pi);
console.log(`exp = ${pi} or ${x}`);
x = true;
console.log(x);
console.log(`exp = ${pi} or ${x}`);
x = undefined;
console.log(`exp = ${x} or ${x}`);
let res = 3;
console.log(`res = ${res}`);
res++;
console.log(res);
res = 7 % 3;
console.log(res);
res = "5" - 2; 
console.log(res);
res = "g" - 2; 
console.log(res);
res = "g" + 2; 
console.log(res);


if(3 !== "3"){
    console.log(`as true`);
}else{
    console.log(`as false`);
}

let age = 18;
let vol = age >= 18 ? 42 : 1.5;
console.log(`vol = ${vol}`);
x = 1;
switch(x){
    case 1 : console.log("1") ; break;
    case 2 : console.log("1") ; break;
    case 3 : console.log("1") ; break;
    default : console.log('Hi');
}

for (let index = 0; index <= 5; index++) {
        console.log(`index = ${index}`);    
}
console.log(typeof x);

res = x;

res = `type ${x}`

console.log(typeof(res));
console.log(res);











/*

DATA TYPE:

number - all numbers(full) 2 || 2.25 || -2 || -2.25 , NaN
boolean - true/false
string - "text" || 'text' 
null - null 
undefined - undefined 

object 

symbol
bigint (big integer number)

TYPES OF VARIBALE:

let
const

*/

