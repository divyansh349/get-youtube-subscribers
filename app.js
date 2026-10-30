require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/app');

const app = express();

let connectionPromise;

app.use(async (req, res, next) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            if (!connectionPromise) {
                connectionPromise = mongoose.connect(
                    process.env.DATABASE_URL,
                    {
                        useNewUrlParser: true,
                        useUnifiedTopology: true
                    }
                ).catch((error) => {
                    connectionPromise = null;
                    throw error;
                });
            }

            await connectionPromise;
        }

        next();
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        res.status(500).json({
            message: 'Database connection failed'
        });
    }
});

app.use(routes);

module.exports = app;