// var num1 = 5
// var num2 = 6

// if (num1 === num2){
    
//     console.log ('the numbers are equal')
    
// } else{
    
//     console.log('the numbers are not equal')
// }

// var language = 'nl'

// var greeting = 'hello world'

// if (language === 'fr'){

// console.log ('bounjour le monde')

// } else if (language === 'sp'){

// console.log ('hola mundo')

// }

// else if (language === 'nl'){

// console.log ('hallo wereld')

// } else {

// console.log (greeting)

// }


// if (num1 > num2){
   
//     console.log ('the greater number of ' + num1 + ' and ' + num2 + ' is ' +num1)
    
//     } else if (num2 > num1){
    
//     console.log ('the greater number of ' + num1 + ' and ' + num2 + ' is ' +num2)
    
//     } else {
    
//     console.log ('the numbers are equal')
//     }

// var num = 0

// if (num % 2 === 0){

// console.log('the number is even')

// } else{

// console.log('the number is odd')

// }

// var num = 0

// if (num > 0){

// console.log('the number is positive')

// } else if(num < 0){

// console.log('the number is negative')

// } else if(num === 0) {
// console.log( 'the number is equal to 0')
// }else{
// console.log ('enter a number')
// }
// function squareTheNumber(num){
// return (num * num)
// }

// function half(num) {
//  return num / 2
// }

// function percentOf(squared, area) {
//  return (((squared / area) * 100) + " %");
// }

// function areaOfCircle(radius) {
//  return Math.PI * squareTheNumber(radius)
// }

// function allAtOnce(num1) {
//  var halfOf = half(num1);
//  var squared = squareTheNumber(half(num1));
//  var area = areaOfCircle(half(num1));
//  return percentOf(squared, area);
// }
//  console.log(allAtOnce(34))

// function capTheName(name){
//     console.log(name)
//     var newName =name.toLowerCase()
//     console.log (newName)
//     var splitname = newName.split('')
//     console.log(splitName)
//     splitName[0].toUppeCase()
//     var putBackName = newName.join('')
//     console.log (putBackName)
   
// }
// capTheName('deavon')

// function getInitString(str) {
//     return str.substring(0, str.length - 1)
//  }

function mixUp ( str1, str2 ){
    
    var newStr1 = str1.slice(2, (str1.length-1))
    var firstTwo1 = str2.slice([0,2])
    var firstTwo2 = str1.slice([0,2])
    var newStr2 = str2.slice([2])
    var newStr3 = firstTwo1 + newStr1 + " " + firstTwo2 + newStr2
    
    return(newStr3)
    
}
    
console.log(mixUp( "camel" ,"rooster"))