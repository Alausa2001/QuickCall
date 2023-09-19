#!/usr/bin/node
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/auth.route');
const userRouter = require('./routes/user.route');
const adminRouter = require('./routes/admin.route');
const emerRouter = require('./routes/emergency.route');

const app = express();


// Middlewares
app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/profile', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/emergency', emerRouter);


app.get('/api/v1', (req, res) => {
    res.status(200).json("Welcome to QuickCall Emergency");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
