let littleRed=(input) =>{ return `Remember, go straight to Grandma/'s house,"+ ${input} +"/'s mother cautioned.  Don/'t dawdle along the way and please don't talk to strangers!  The woods are dangerous."

"Don't worry, mommy," said ${input}, "I'll be careful.`}
console.log(littleRed('Lev'))

const strToNumArr = (strArr) => strArr.map(str => Number(str))
const strToNumArr = (strArr) => strArr.map(Number)

const firstLetterUpper = (str) => 
str.split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ')

  function map(arr, callback){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
      newArr.push(callback(arr[i]))
    }

    const sum = (arr) => arr.reduce((acc, num) => {
        console.log(`acc: ${acc}, num: ${num}`)
        return acc + num
      })
      
      
      console.log(sum([2,3,4,5]))


      /// 

const reduceMin = (arr) => 
arr.reduce((min, num) => {
  if (num < min){
    return num;
  } else {
    return min;
  }
})

const reduceMin = (arr) => 
arr.reduce((min, num) => {
  console.log(`min: ${min}, num: ${num}`)
  return num < min ? num : min
})

console.log(reduceMin([2, 3, 4, 5, 1, 9]));


const max = (num1, num2) => {
if (num1 > num2){
  return num1
} else {
  return num2
}
}

const max = (num1, num2) => {
return num1 > num2 ? num1 : num2
}

function countOddsAndEvens(arr) {
    return arr.reduce((acc, num) => {
      console.log(`evens: ${acc.evens}, odds: ${acc.odds} num: ${num}`)
      if (num % 2 === 0) {
        acc.evens += 1
        return acc
      } else {
        acc.odds += 1
        return acc
      }
    }, { odds: 0, evens: 0 })
  }
  
  console.log(countOddsAndEvens([11, 2, 36, 4, 15]));

  function countOddsAndEvens(arr) {
    return arr.reduce((acc, num) => {
      console.log(`evens: ${acc.evens}, odds: ${acc.odds} num: ${num}`)
      if (num % 2 === 0) {
        return {
          evens: acc.evens + 1,
          odds: acc.odds
        }
      } else {
        return {
          evens: acc.evens,
          odds: acc.odds + 1
        }
      }
    }, { odds: 0, evens: 0 })
  }
  
  console.log(countOddsAndEvens([11, 2, 36, 4, 15]));
  //  returns {odds: 2, evens: 3}

  const add = (num1, num2) => num1 + num2
  
  const num1 = Number(process.argv[2]);
  const num2 = Number(process.argv[3])
  console.log(`the result is: ${add(num1, num2)}`)