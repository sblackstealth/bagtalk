const express = require('express') // import express
const morgan = require('morgan')
const port = 3000; // we will use this later
const app = express() // create an express server

app.use(morgan("dev"))
const storage = {} //{"wins": 0, "losses":0 "ties":0}
const rps=["rock","paper","scissors"]
const loss=["paperscissors","rockpaper","scissorsrock"]
const rpsChoice=()=> rps[Math.ceiling(Math.random()* 3)] ;
rpsResults =(user,ai)=>{
    const userAi = user + ai
    if (user===ai){
        return "tie"
    }else if (loss.includes(userAi)){
        return "lose"
    }else{
        return "win"
    }
}
let compChoice ;
if (choiceNumber === 1 ){
    compChoice = 'rock'
} else if (choiceNumber === 2 ){
    compChoice = 'paper'
} else{
    compChoice = 'scissors'
}
app.get('/:userchoice', (req, res) => {
    if(!rps.includes(req.params.userChoice)){
        res.status(404)
        res.send
    }
  res.send({user:"rock",
ai:`${compChoice}`,
 }) 
}) // routes the '/' URL path to produce a response of 'Hello World!'

app.get(

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)})