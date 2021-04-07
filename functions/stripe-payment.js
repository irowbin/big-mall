const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.handler = async ({ body, headers, httpMethod }) => {
  try {

    if(httpMethod !== 'POST') return {
      statusCode: 200,
      body: JSON.stringify({message: 'not modified'})
    }
      const payload = {
        source: body.token.id,
        amount: body.amount,
        currency: 'usd'
      }
     const sku = stripe.charges.create(payload)

    return {
      statusCode: 201,
      body: JSON.stringify({ received: true, }),
    }
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`)

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    }
  }
}
