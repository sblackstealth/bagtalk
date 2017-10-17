function namesOlderThan(param1, param2) {
    
}
var people = [
    { name  :"devin",
    age:"34"},
    {name:"d'aaron",
age :"23"}
]

console.log(people.map(function(x){
    return x
}))
console.log(people.filter(function(x){
    return x.name.length >= 6
}))
console.log(people.reduce(function(accumulator,current,){
   
    return Number(accumulator) + Number(current.age)
},0))