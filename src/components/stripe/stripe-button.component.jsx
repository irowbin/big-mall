import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100
  const publishableKey =
    'pk_test_51IYZ4WJZ9deey7Vz4SXlrTdwTmRk8IqpHzL8pX35R1HU2HEqqbw7wc4mNLH0p0CDgKBGdB4a19kppC6uVXnt5hoM00gXLG7hpG'
  const onToken = (token) => {
    console.log(token)
  }
  return (
    <StripeCheckout
      token={onToken}
      stripeKey={publishableKey}
      label="Pay Now"
      name="BIG-MALL INC"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
    />
  )
}
export default StripeCheckoutButton
