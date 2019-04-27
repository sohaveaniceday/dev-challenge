const express = require('express')
const mongoose = require('mongoose')
const databaseURI = 'mongodb://localhost/website-name'
const bodyParser = require('body-parser')
const port = 4000
const app = express()
app.use(bodyParser.json())

mongoose.connect(databaseURI, { useNewUrlParser: true })

app.listen(port, () => console.log(`App is listenting on port ${port}`))