const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

let birds = [
  {
    legs: 2,
    color: 'red',
    canFly: true
  }, {
    legs: 2,
    color: 'blue',
    canFly: false
  }
]

// route
app.get('/birds', (req, res) => {
  res.send(birds)
})

app.post('/birds', (req, res) => {
  birds.push({
    legs: req.body.legs,
    color: req.body.color,
    canFly: req.body.canFly
  })

  res.send({
    status: 'sukses bro',
    data: birds
  })
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))
