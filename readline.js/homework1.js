// var readline = require('readline')
// var counter = 0
// console.log (counter)

// var rl = readline.createInterface({
// input: process.stdin,
// output: process.stdout
// })


// function clear () {
// process.stdout.write('\u001B[2J\u001B[0;0f')
// }


// rl.on("line", function (input) {
    

//     function increment (){
//         console.log((counter += 1))    
//     }
//     function decrement (){
//         console.log((counter -= 1))  
//     }
//     function reset (){
//         console.log((counter = 0 ))
//     }
//     function whatToDo (str){
//         str = str.toLowerCase()
//         if (str === "inc"){
//             increment(counter)
//             console.log("the counter has been incremented, please enter another command")
//         } else if (str === "dec"){
//             decrement(counter)
//             console.log("the counter has been decremented, please enter another command")
//         } else if (str === "res"){
//             reset(counter)
//             console.log("the counter has been reset, please enter another command")
//         } else{
//             console.log( "please choose inc, dec, or res")
//         }
//     }
//     whatToDo(input)
// })


// ** 
// Write a program that reads the user input one line at a time. 
// It would expect the user input to start with one of four mathematical symbols: + - * / 
// followed by two numbers, separated by spaces. For example: + 4 2 . 
// The program will perform the desired mathematical operation 
// (addition, subtraction, multiplication or division) and log the result. 
// The program will display an explanatory message if:

//   1. the operation is invalid.

// 2. The operation is not followed by the expected two numbers (with spaces)

// For example, if the user enters: * 2 3 the program will log 6.


var readline = require('readline')
console.log( "please enter an operator and numbers, followed by spaces")


var rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})


function clear () {
process.stdout.write('\u001B[2J\u001B[0;0f')
}


rl.on("line", function (input) {
var result = 0
var newArr = input.split(" ")
var numArr = input.split(" ",)
numArr.splice(0,1)

function multiply() {
    for(var i = 0; i < numArr.length; i ++){
        result *= Number(numArr[i + 1])
    }
};    
function divide() {
    for(var i = 0; i < numArr.length; i ++){
        result /= numArr[i]
    }
};
function add() {
    for(var i = 0; i < numArr.length; i ++){
        result += numArr[i]
    }
};

function subtract() {
    for(var i = 0; i < numArr.length; i ++){
        result -= numArr[i]
        
    }
};

function whatToDo() {
    if (newArr[0] === "*"){
        multiply()
        console.log(result)
        console.log("the numbers have been multiplied,\n please enter an operator and numbers, followed by spaces")
    } else if (newArr[0] === "/"){
        divide()
        console.log(result)
        console.log("the numbers have been divided, \n please enter an operator and numbers, followed by spaces")
    } else if (newArr[0] === "+"){
        add()
        console.log(result)
        console.log("the numbers have been added, \n please enter an operator and numbers, followed by spaces")
    } else if (newArr[0] === "-"){
        subtract()
        console.log(result)
        console.log("the numbers have been subtracted, \n please enter an operator and numbers, followed by spaces")
    } else{
     console.log( "please enter an operator and numbers, followed by spaces")
    }
    console.log('numArr:',numArr)
    console.log("newArr: ", newArr)
};
makeNumArr()
whatToDo()
})