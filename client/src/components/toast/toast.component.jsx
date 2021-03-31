import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ToastStyledContainer, CheckMarkStyled, CloseIcon } from './toast.styled.component'
import { showToast } from '../../store/action/toast/toast-actions'
import { createStructuredSelector } from 'reselect'
import { selectToastList } from '../../store/selector/toast/toast-selector'

const Toast = (props) => {
  const { toastList } = props
// TODO: need to readjust the toast stack and set auto time out based on supplied duration or default.
  return <div> {
    toastList.filter(t => t.message).map(toast =>
      <ToastStyledContainer key={toast.uid}
                            isError={toast.isError}>
        <div style={{ width: '30px', padding: '0 6px' }}>
          <CheckMarkStyled />
        </div>
        <div className='ml-1'>{toast.message}</div>
        <CloseIcon onClick={toast.onClose}> &#10005;</CloseIcon>
      </ToastStyledContainer>
    )
  }
  </div>

}
const mapDispatchToProps = dispatch => ({
  onToggleToast: (isShow) => dispatch(showToast(isShow))
})
const mapStateToProps = createStructuredSelector({
  toastList: selectToastList
})

export default connect(mapStateToProps, mapDispatchToProps)(Toast)
