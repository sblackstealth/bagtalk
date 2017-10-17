var arr = [1, 2, 'popsicle', 6, 7, 'axe body spray', 100];
var arr1 = arr.filter(function(elem){
    if (typeof elem === "number"){
        return true
    }else {
        return false
    }
})
var sumOfArr = arr1.reduce(function(accumulator, curr) {
        return accumulator + curr
})
console.log(sumOfArr)

function elementDivisibleBy (divisor, arr){
    var arr1 = arr.filter(function(elem){
        if ( elem % divisor === 0){
            return (elem)
        }
    })
    console.log (arr1)
}
(elementDivisibleBy(2,[ 7, 3, 4, 8, 12, 13]))
function countZeros(arr){
    var arr1 = arr.reduce(function(accumulator, curr){
        counter = 0
        if (curr === 0){
            counter +=1
           
        }


    })
}

// var text = "I may not have been sure about what really did interest me, but I was absolutely sure about what didn\'t.";

// var pattern = /may/;

// console.log(pattern.exec(text));