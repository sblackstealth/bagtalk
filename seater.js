

// function namePicker (names){
//     let studentNames = nameRandomizer(names)
//     let newName = ""
//     for(i = 0; i < studentNames.length; i ++){
//         newName = studentNames[i]
//         let seatAssignment = 'seat ' + (i +1) + ' '+ newName
//         console.log (seatAssignment)

//     }
// }
// function nameRandomizer(names){
//    let newName =[]
//    let name= ''
    
//     for (i = 0; newName.length < names.length;i ++){
//         name = names[(Math.floor(Math.random() * names.length))]
//         if (!newName.includes(name)){
//         newName.push(name)
       
//         }
//     }
//     return newName
// }

// namePicker(['aiden','sami','alejandro','carolina','dave', 'dori', 'eddie', 'eion', 'elon', 'gerson', 'greg','helen','jamal','janharris', 'jerell','eric','ishmael', 'joyce' , 'kelvin','luiza', 'michelle','monique', 'newton', 'nickC', 'nickP', 'princess','rommie', 'ben','ryan','shaedon','sergio', 'simon','xsumi','xavier' ])


// by Shaedon Blackman
// and Ryan Omoruyi


function mySubString (str, startIndex, endIndex) {
    var whatever = ""
    var newEnd = null
    if (endIndex === undefined){
        newEnd = str.length 
           
    }else{
        newEnd = endIndex      
    }
    for (var i = startIndex; i < newEnd; i++) {
        whatever += str[i] 
    }
    return whatever
    
}
    
console.log(mySubString("Romie", 1, ))


// function mySubString (str, startIndex, endIndex) {
//     var whatever = ""
//     if (endIndex === undefined){
//         whatever = "end index is undefined :("
            
//     }else{
//         whatever = "end index is defined :D"
//     }   
//     return whatever
// }
    
// mySubString("Romie", 1, 3)