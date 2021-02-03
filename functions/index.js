const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
const stripe = require('stripe')('sk_test_51IDo50JZI69RepBVRUuu5yN2wkJciwNNsWRkzq5RIHT2lekyCsy0ChecYPMIfr3VUSKopI9mkTlyeSWSeTF049Yl00iuwHWDEk')

//API

//App comfig
const app = express();

//MIddlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hellow word'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-d3b74/us-central1/api