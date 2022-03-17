const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/index.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config({path: './config/.env'});

const app = express();

const corsOptions = {
    origin: [process.env.CLIENT_URL],
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}
app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', userRoutes);

app.listen(process.env.PORT, () => console.log('serveur started : ' + process.env.PORT));