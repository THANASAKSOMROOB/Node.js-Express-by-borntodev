const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3000;

// เอาไว้ดูข้อมูล request จากเว็บ ดู log นั่นเอง
app.use(morgan('combined'));

app.get("/", (req,res) => {
    res.send('testoff')
})

app.listen(port, () => {
    //console.log("Listening on port " + chalk.green(": "+port));
    debug("Listening on port " + chalk.green(": "+port));
})