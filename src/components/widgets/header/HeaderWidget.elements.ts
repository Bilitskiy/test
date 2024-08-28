import styled from 'styled-components'

export const Root = styled.div`
  min-height: 100px;
  max-height: 100px;
  position: sticky;
  top: 0;
  background-color: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
`
export const BurgerButton = styled.button<{ isTriggered: boolean }>`
  position: relative;
  width: 30px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;

  &::before,
  &::after,
  div {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #fff;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${({ isTriggered }) => (isTriggered ? '10px' : '0')};
    transform: ${({ isTriggered }) => (isTriggered ? 'rotate(45deg)' : 'rotate(0)')};
  }

  &::after {
    bottom: ${({ isTriggered }) => (isTriggered ? '10px' : '0')};
    transform: ${({ isTriggered }) => (isTriggered ? 'rotate(-45deg)' : 'rotate(0)')};
  }

  div {
    top: 10px;
    opacity: ${({ isTriggered }) => (isTriggered ? '0' : '1')};
  }
`;
