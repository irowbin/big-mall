const stripePaymentHandler = require('./payments/stripe-payment')
exports.handler = async (event, context) => {
  const { path } = event

  try {
    if (path.includes('/payment/stripe'))
      return await stripePaymentHandler(event)
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Internal server error'
      }, null, 2)
    }
  }
}
