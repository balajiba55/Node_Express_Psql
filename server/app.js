//importing required modules
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//assigning default port
const port = 3000

//Node.js body parsing middleware.
//Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
//setup server
var server = require('http').createServer(app);
require('./routes')(app);

//sample get method
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})


//listening the server
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})