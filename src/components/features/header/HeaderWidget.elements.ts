import styled from 'styled-components'

export const HeaderContainer = styled.div<{ isLightTheme: boolean }>`
  min-height: 100px;
  max-height: 100px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid;
  border-color: ${({ isLightTheme }) => (isLightTheme ? 'black' : 'white')};
  gap: 20px;
  padding: 20px;
  backdrop-filter: blur(5px);
  background: ${({ isLightTheme }) => (isLightTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)')};
`;
export const BurgerButton = styled.button<{ isTriggered: boolean, isLightTheme: boolean }>`
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
    background-color: ${({ isLightTheme }) => (isLightTheme ? 'black' : 'white')};
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
