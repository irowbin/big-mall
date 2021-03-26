import styled from 'styled-components'

export const ToastStyledContainer = styled.div`
  display: flex;
  height: 50px;
  position: fixed;
  right: 10px;
  top: 10px;
  max-width: 200px;
  color: rgba(255, 255, 255, 0.83);
  padding: 10px;
  z-index: 1050;
  background: #718c15;
  box-shadow: 0 0 10px -2px #474747;
  border-radius: 4px;
  transition: all .2s;
  outline: none;

  &:hover {
    background: #87a719;
  }
`

export const CheckMarkStyled = styled.div`
  display: inline-block;
  transform: rotate(45deg);
  height: 24px;
  width: 12px;
  border-bottom: 4px solid #fff;
  border-right: 4px solid #fff;
`
