const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const serverless = require('serverless-http');
const app = express()

if (process.env.MODE_ENV !== 'production') {
  require('dotenv').config()
}

// lets pass the secret key from env file.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
if (process.env.MODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))

// this * route is to serve project on different page routes except root `/`
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, error => {
  if (error) throw error
  console.log(`app is listening on port: ${port}`)
})

app.post('/payment', (req, res) => {
  console.log(req.body)
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  }
  stripe.charges.create(body, (stripeEx, stripeRes) => {
    res.status(stripeEx ? 500 : 200).send(stripeEx ? { error: stripeEx } : { success: stripeRes })
  })
})

module.exports = app;
module.exports.handler = serverless(app);

