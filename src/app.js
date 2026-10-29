const express = require('express');
const app = express();

const Subscriber = require('./models/subscribers');
const path = require('path');

// API to render html file.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Get all subscribers
app.get('/subscribers', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.status(200).send(subscribers);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Get all subscribers by names and subscribed channels
app.get('/subscribers/names', async (req, res) => {
    try {
        const subscribers = await Subscriber.find(
            {},
            { name: 1, subscribedChannel: 1, _id: 0 }
        );

        res.status(200).send(subscribers);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Get subscribers by ID
app.get('/subscribers/:id', async (req, res) => {
    try {
        const subscriber = await Subscriber.findById(req.params.id);

        if (!subscriber) {
            return res.status(400).send({
                message: 'Subscriber not found'
            });
        }

        res.status(200).send(subscriber);
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
});

module.exports = app;
