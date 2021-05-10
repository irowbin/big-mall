import React from 'react'
import { ToastStyledContainer, CheckMarkStyled, CloseIcon } from './toast.styled.component'

const Toast = (props) => {
  const { toastList } = props
// TODO: need to readjust the toast stack and set auto time out based on supplied duration or default.
  return <div> {
    toastList?.filter(t => t.message).map(toast =>
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
// const mapDispatchToProps = dispatch => ({
//   onToggleToast: (isShow) => dispatch(showToast(isShow))
// })
// const mapStateToProps = createStructuredSelector({
//   toastList: selectToastList
// })

export default Toast
