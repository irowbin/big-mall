import React from 'react'
import { ToastStyledContainer, CheckMarkStyled } from './toast.styled.component'

const Toast = ({ isError, message }) => {
  return (
    <ToastStyledContainer>
      <div style={{ width: '30px', padding: '0 6px' }}>
        <CheckMarkStyled />
      </div>
      <div className="ml-3">{message}</div>
      <div>x</div>
    </ToastStyledContainer>
  )
}

export default Toast
