const express = require('express'); // import express
const morgan = require('morgan');
const port = 3000; // we will use this later
const app = express(); // create an express server
const movies= require("./movies.json");

app.use(morgan("dev"))
const input = req.params.input;

const repeat = function ("input") {
    return input + input

}
const exclaim = ("input") => {
    return input + "!"

}
const reverse = ("input") => {
    let newArr = input.split("")
    let reversedArr = newArr.reverse()
    let backToString = reversedArr.join("")

}

app.get("/repeat/:input",(req, res)=>{
    res.send(repeat(input))

})
app.get("/exclaim/:input",(req, res)=>{
    res.send(exclaim(input))

})
app.get("/reverse/:input",(req, res)=>{
    res.send(reverse(input))

})
app.get ("/", (req, res) =>{

})
app.get("*",(req, res) =>{
    res.status(404)
    res.send("Please format your URL as such: /repeat or /exclaim or /reverse ")
});
app.listen(port, ()=>{
    console.log(`string manipulator listening on port ${port}`)
})