import Spinner from '../spinner/spinner.component'
import React from 'react'

/**
 * HOC (higher ordered component)
 */
const WithSpinner = (WrappedComponent) => {
  return ({ isLoading, ...otherProps }) =>
    isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
}

export default WithSpinner
