import Spinner from '../spinner/spinner.component'
import React from 'react'

/**
 * HOC (higher ordered component)
 */
const WithSpinner = (WrappedComponent) => {
  return ({ isLoading, ...otherProps }) => {
    console.log(isLoading, otherProps)
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
  }
}

export default WithSpinner
