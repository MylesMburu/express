const express = require("express");

const app = express();

const dotenv = require('dotenv');
dotenv.config();

const port = 3000

app.listen(port, ()=>console.log('its running'))