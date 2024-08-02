const express = require('express');
const bodyParser = require('body-parser');
const Stripe = require('stripe');

// Replace with your own Stripe secret key
const stripe = Stripe('sk_test_51PgO1VRsVlmQY2pOtufBRbmvhKPfyDXO0VyMRTM8FJOZReGHuPKGkg0eqf85JwAVL4v4hHhVevURjwljcJIn0egC00dJxk3Dq4');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint to create a PaymentIntent
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;

    // Create a PaymentIntent with the amount
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd', // You can use other currencies if needed
    });

    // Send the client secret to the client
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
