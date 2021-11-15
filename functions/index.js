const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51JLkCoSCKMlszvE8AI32aYkEcNVwB5PZA1G5v5hj6nzzqDeo6w99runoYAUUPAlZSnbjyZLMRL7nRk8l31wGIWrj00OnVhwCcA');

//  API----> TO SETUP AN API WE NEED


// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json()); //allows us to send and parse it in json format


// - API routes
app.get("/", (request,response) => response.status(200).send('hello world'));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "INR",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command

exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/fake-clone-a853e/us-central1/api