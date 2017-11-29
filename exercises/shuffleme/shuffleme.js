const express = require('express') // import express
const morgan = require('morgan')
const port = 3000; // we will use this later
const app = express() // create an express server

app.use(morgan("dev"))
const suit= ["hearts","diamonds","clubs","spades"]
const types=[2,3,4,5,6,7,8,9,"jack","queen","king","ace"]
let deck = []
const allcards= ()=>{
suits.foreach((st)=>{
    types.foreach((tp)=>{
        deck =deck.concat({
                suit: st,
                type: tp
            });
        });
    });
return deck
}

app.get("/draw/:cards", (req, res) => {
    let howMany = Number(req.params.cards)
    let giveBack =[]
    let newDeck = (deck) =>{
        for(i = 0; i <= howMany; i++){
         giveBack.push (deck[Math.floor(Math.random * 52)])

        }
    }
  
    
    res.send(giveBack)    
    })
 

console.log(deck)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)})