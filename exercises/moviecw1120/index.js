const express = require('express') // import express
const morgan = require('morgan')
const port = 3000; // we will use this later
const app = express() // create an express server
const movies= require("./movies.json")

app.use(morgan("dev"))

app.get('/', (req, res) => {
  res.send('Hello World!')
  let instructions = "/year/:year <br>  /title/:title<br> /genre/genre";
  res.send(isntructions);

})
// req.params returns object
app.get("/year/:year", (req, res) => {
   let year = Number(req.params.year)
   let thisYearMov= movies.filter(movie=>{
       if(movie.year === year){
       return true
       }
       
   })
res.send(thisYearMov)  
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})