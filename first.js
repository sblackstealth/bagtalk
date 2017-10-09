// function temperatureConverter(number,str){
// var number = Number(number)
// var str = str.toUpperCase()

//     if (str === "C"){
//         return(tempToCelcius(number))
//     } else if(str === "F"){
//         return(farenheightTemp(number))
//     }else{
//         return('please enter c or f')
//     }
    
//     function farenheightTemp(number){
//         var farenheightTemp = (number * 1.8) + 32
//         return (farenheightTemp +'˚F' )
//     }
    
//     function tempToCelcius (number){
//         var celciusTemp = (number - 32) / 1.8
//         return (celciusTemp + '˚ C')
//     }
// }

// console.log(temperatureConverter(43, "f"))


// function descindingNumbers(number){
    
//     for(i = number; i > 0; i-= 1){
    
//         console.log(i)
//     }
// }
// descindingNumbers(23)

// function printOddNumbers (number) {
    
//       for(i = number; i >= 0; i-= 1){
    
//         if( i%2 === 1){
    
//         console.log(i)
    
//         }
    
//       }
    
//     } 
    
//     printOddNumbers(9)

// function printMultiplesof9 (num){
    
//     for(i = 1; i <= num; i++){
    
//         console.log(i * 9)
    
//     }
    
// }
// printMultiplesof9(7)

// function assignGrade() {
    
//     for(score= 60;score<101;score ++){
//         if (score > 90) {
//             console.log (score + ' A')
//         } else if (score > 80) {
//             console.log (score + ' B')
//         } else if (score > 70) {
//             console.log (score + ' C')
//         } else if (score > 65) {
//             console.log (score + ' D')
//         } else {
//             console.log (score + ' F')
//         }
//     }
// }
// assignGrade()

function sing99Bottles(){
    var line1 = " bottles of beer on the wall "
    
    var line2 = " bottles of beer \n take one down , pass it around ,"
    
    var oneBottleLeft1 = " 1 bottle of beer on the wall "
    
    var oneBottleLeft2 = " bottle of beer \n take one down , pass it around ,"
    
    var noBottlesLeft = " No more bottle of beer on the wall."
    
    
    
      for(i= 99; i > 0; i --){
        var wholeVerse = i + line1 + i + line2  + i + line1
        
        var wholeVerse2 = i + line1 + i + line2  + oneBottleLeft1
        
        var wholeVerse1 =  oneBottleLeft1  + i + oneBottleLeft2  + noBottlesLeft
    
        if( i > 2){
    
          console.log( wholeVerse)
    
        } else if (i === 2){
    
          console.log(wholeVerse2)
    
        }else{
    
          console.log(wholeVerse1)
    
        }
    
      }
    
    }
    sing99Bottles()