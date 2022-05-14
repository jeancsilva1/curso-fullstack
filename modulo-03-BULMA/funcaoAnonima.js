
//função anonima
/*
let soma = function(a, b){
    return a + b;

}
console.log(soma(10,20))
*/

//Arrow Function
/*
let multiplicacao = a =>a * 2

console.log(multiplicacao(10))
*/
// High Order Functions
function add (num1, num2){
    return num1 + num2
}
function multiply (num1, num2) {
    console.log(num1 * num2)
    return num1 * num2
}
function subtract (num1, num2) {
    return num1 - num2
}
function divide (num1, num2) {
    return num1 / num2	
}

function calculator (num1,num2, operator) {
    return operator (num1,num2);
}
calculator(5,2, multiply) 