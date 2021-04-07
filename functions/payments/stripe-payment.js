const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = async (event) => {
  const { body, httpMethod } = event
  const reqBody = JSON.parse(body)
  try {

    if (httpMethod !== 'POST') return {
      statusCode: 400,
      body: JSON.stringify({ message: event }, null, 4)
    }

    const payload = {
      source: reqBody.token.id,
      amount:Math.round(reqBody.amount),
      currency: 'USD'
    }
    const sku = await stripe.charges.create(payload)

    return {
      statusCode: 200,
      body: JSON.stringify({ received: sku })
    }
  } catch (err) {
    console.log(`Stripe failed with ${err}`)
    return {
      statusCode: 400,
      body: `Stripe  error: ${err.message}`
    }
  }
}
