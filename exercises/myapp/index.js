const express = require('express') // import express
const morgan = require('morgan')
const port = 3000; // we will use this later
const app = express() // create an express server

app.use(morgan("dev"))
let choiceNumber= Math.ceiling(Math.random()* 3) ;
let compChoice ;
if (choiceNumber === 1 ){
    compChoice = 'rock'
} else if (choiceNumber === 2 ){
    compChoice = 'paper'
} else{
    compChoice = 'scissors'
}
app.get('/rock', (req, res) => {
  res.send({user:"rock",
ai:`${compChoice}`,
 }) 
}) // routes the '/' URL path to produce a response of 'Hello World!'

app.get('/paper', (req, res) => {
    res.send({user:"paper",
    ai:`${compChoice}`,
  })

app.get('/scissors', (req, res) => {
    res.send({user:"scissors",
    ai:`${compChoice}`,
  })


app.get('*', (req, res) => {
    res.redirect('/')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)})