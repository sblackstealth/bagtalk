const express = require('express') // import express
const morgan = require('morgan')
const port = 8000; // we will use this later
const app = express() // create an express server

app.use(morgan('dev'))

const suits = ["hearts", "spades", "clubs", "diamonds"];
const types = [[2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8],
               [9, 9], [10, 10], ["jack", 10], ["queen", 10], ["king", 10],
               ["ace", 11]];

let deck = [];

const shuffle = () => {
  suits.forEach((st) => {
    types.forEach((tp) => {
      deck = deck.concat({
        suit: st,
        type: tp[0],
        value: tp[1]
      });
    });
  });
  return deck;
};

app.get('/draw/:num', (req, res) => {
  if (Number(req.params.num) > 10) {
    res.status(404);
    res.send("Maximum draw is 10.");
  }

  let shuffled = shuffle();
  let response = {};

  for (let i = 0; i < req.params.num; i++) {
    let sampleInd = Math.floor(Math.random() * shuffled.length);
    response[i] = shuffled[sampleInd];
    shuffled.splice(sampleInd, 1);
  }

  res.send(JSON.stringify(response));
});

app.get('/', (req, res) => {
  let shuffled = shuffle();
  let response = {};

  for (let i = 0; i < 2; i++) {
    let sampleInd = Math.floor(Math.random() * shuffled.length);
    response[i] = shuffled[sampleInd];
    shuffled.splice(sampleInd, 1);
  }

  // response
  // {
  //   0: {
  //     suit: hearts
  //     etc
  //   }
  //   1: {
  //     suit: diamonds
  //     ...
  //   }
  // //}

  let score = response[0].value + response[1].value;

  res.write(`You drew the ${response[0].type} of ${response[0].suit}. `);
  res.write(`You drew the ${response[1].type} of ${response[1].suit}. `);

  if (score < 17) {
    res.write(`Your score is ${score}. Hit!`);
  } else {
    if (response[0].value === 11 || response[1].value === 11) {
      res.write(`If your ace was 11, your score would be ${score}. `)
      res.write(`If your ace was 1, your score would be ${score - 10}. `)
      res.write("It's up to you!")
    } else if (response[0].value === 11 && response[1].value === 11) {
      res.write(`Your score is 2 or 22. Hit!`)
    } else {
      res.write(`Your score is ${score}. Stay!`);
    }
  }

  res.end();
});

app.get('*', (req, res) => {
  res.status(404);
  res.send("Please format your URL as follows: /draw/:number");
});

app.listen(port, () => {
  console.log(`Cards app listening on port ${port}`)
}) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working