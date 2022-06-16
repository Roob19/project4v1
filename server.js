import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from 'morgan';
import cors from 'cors';

import { router as barRouter } from './routes/bar';

import('./config/database');

const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;

require('dotenv').config();
require('./config/database');

const userRouter = require('./routes/users');
const cors = require('cors')

app.use(
    express.static(
        path.join(path.dirname(fileURLToPath(import.meta.url)), 'build')
    )
)

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/bar', barRouter);

app.get('/*', function(req, res) {
    res.sendFile(
        path.join(path.dirname(fileURLToPath(import.meta.url)), 'build', 'index.html')
    )
})

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});
