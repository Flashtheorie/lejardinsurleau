const express = require('express')
const app = express()
const port = 3000
var path = require('path');
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end();
})
  

app.get('/', (req, res) => {
  res.send('lol');

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
