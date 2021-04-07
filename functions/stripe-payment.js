const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.handler = async ({ body, headers, httpMethod }) => {
  try {

    if(httpMethod === 'POST'){
      const payload = {
        source: body.token.id,
        amount: body.amount,
        currency: 'usd'
      }
      stripe.charges.create(payload, (stripeEx, stripeRes) => {
      //  res.status(stripeEx ? 500 : 200).send(stripeEx ? { error: stripeEx } : { success: stripeRes })
      })
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    }
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`)

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    }
  }
}
