import React from 'react'
import { ToastStyledContainer, CheckMarkStyled, CloseIcon } from './toast.styled.component'

const Toast = ({ isError, message, onClose }) => {
  return (
    <ToastStyledContainer isError={isError}>
      <div style={{ width: '30px', padding: '0 6px' }}>
        <CheckMarkStyled />
      </div>
      <div className='ml-3'>{message}</div>
      <CloseIcon onClick={onClose}> &#10005;</CloseIcon>
    </ToastStyledContainer>
  )
}

export default Toast
