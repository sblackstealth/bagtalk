// var now = new Date();
// var msPerminute = 1000 * 60
// var msPerHour = 1000 * 60 * 60 
// var msPerDay = 1000 * 60 * 60 * 24 
// var msPerWeek = 1000 * 60 * 60 * 24 * 7
// var msPeryear = 1000 * 60 * 60 * 24 * 7 * 365
// console.log (now.toString())

// var timestamp = Date.parse("2016-03-146T3:12:00")
// var then = new Date(timestamp)
// console.log((then.toString()))

// var date = new Date(2011, 0, 3,)
// var date2= date - 
// function getWeekDay (date){
// var whatDay = date.toString().split(" ")
// return whatDay[0]
// }
// console.log(getWeekDay(date))
function Vector ={
    this.num = num
    this.x = x
    this.y = y
}
var V1 = new Vector("1", "4", "4");
var V2 = new Vector("2", "2", "3");

    Vector.prototype.add = function(Vector1, vector2) {

   sumVectorsX = V1.x + V2.x 
   sumVectorsY = V1.y + V2.y
   console.log ("the sum of the two vector coordinates are " + "x: " + sumVectorsX + "y: " + sumVectorsY)


    };
    Vector.prototype.subtract = function(Vector1, vector2) {
    
       differenceVectorsX = V1.x - V2.x 
       differenceVectorsY = V1.y - V2.y
       console.log ("the difference of the two vector coordinates are " + "x: " + differenceVectorsX + "y: " + differenceVectorsY)
    
    
    };


    // function nameOfMonth(date) {
    //     var timestamp = Date.parse(date)
    //     var urDate = new Date (timestamp)
    //     var monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
    //     return monthArr[urDate.getMonth()]
    // }
    // console.log(nameOfMonth('1991-4-20'))