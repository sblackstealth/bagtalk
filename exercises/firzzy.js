// function rangeWithStep (min, max, step){
//     var newStep = step
//     var rangeArr =[]
    
//     if(step === undefined ){  
//         newStep = 1
//     }
    
//     for(i = min; i <= max; i += newStep){
//         rangeArr.push(i)
//     }
    
//     return rangeArr
    
// }
    
// console.log (rangeWithStep(2, 6, 2))


// function deepEquals(arr1, arr2){
//     var output = false
//     if(arr1.length !== arr2.length){
//         return output
//     }
//     for(var i = 0; i < arr1.length; i++){
//         if (arr1[i] === arr2[i] ){
            
//         }
//     }
//     return output
// }
// console.log(deepEquals([1,2,3], [1,5,3])) 

function LastFirst (arr){
    
    var newArr = []
    
    for(var i = arr.length -1; i < arr.length ; i+= 1){
    
        newArr.push(arr[i], )
    
    }
    
    for( var i = 0; i < arr.length -1; i ++){
    
        newArr.push(arr[i], )
    
    }
    
    return newArr
    
}
console.log(LastFirst([2,5,67,8,9,5]))