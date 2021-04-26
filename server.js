const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const User = require('./models/userdetails')
const { db } = require('./models/userdetails')
require('dotenv').config()

// routes


const app = express()

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex : true,
    useFindAndModify : true
})
.then(() => console.log("BD connected"))
.catch(err => console.log("db error", err));



app.use(express.json());
app.use(cors());
fs.readdirSync('./routes').map((r) =>app.use("/api", require("./routes/" + r)));


const port = process.env.PORT || 8000;

app.listen(port, console.log(`server on ${port}`));
