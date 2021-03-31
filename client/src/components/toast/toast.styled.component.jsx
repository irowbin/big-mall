import styled from 'styled-components'

export const ToastStyledContainer =  styled.div`
  display: flex;
  position: fixed;
  right: 10px;
  top: 10px;
  max-width: 380px;
  color: rgba(255, 255, 255, 0.83);
  padding: 10px;
  z-index: 1050;
  background: ${props => props.isError ? '#be0f4d' : '#718c15'};
  box-shadow: 0 0 10px -2px #474747;
  border-radius: 4px;
  transition: all 0.2s;
  outline: none;

  &:hover {
    background: ${props => props.isError ? '#d61559' : '#89a91b'};
  }
`

export const CloseIcon = styled.div`
  margin-left: 15px;
  cursor: pointer;
  opacity: 0.7;
  font-weight: bolder;

  &:hover {
    opacity: 1;
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
