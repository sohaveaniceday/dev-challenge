const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { dbURI, port } = require("./config/environment");
const app = express()
const router = require("./config/routes");

app.use("/api", router);

mongoose.connect(dbURI, { useNewUrlParser: true });

app.use(express.static(`${__dirname}/dist`));

app.use(bodyParser.json());

app.use("/api", router);

app.get("/*", (req, res) => res.sendfile(`${__dirname}/dist/index.html`));

app.listen(port, () => console.log(`App is listening on port ${port}`))

module.exports = app;

