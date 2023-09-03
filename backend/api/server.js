#!/usr/bin/node
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/auth.route');

const app = express();


// Middlewares
app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});