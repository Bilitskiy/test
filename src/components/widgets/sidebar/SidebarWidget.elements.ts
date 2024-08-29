import {motion} from "framer-motion";
import styled from 'styled-components'

export const Sidebar = styled(motion.div)<{ isLightTheme: boolean }>`
  z-index: 10;
  position: absolute;
  min-height: 100vh;
  max-height: 100vh;
  left: 0;
  top: 0;
  flex-direction: column;
  gap: 10px;
  border-right: 1px solid;
  background-color: ${({ isLightTheme }) => (isLightTheme ? 'white' : 'black')};;
  border-color: ${({ isLightTheme }) => (isLightTheme ? 'black' : 'white')};
  @media (min-width: 1024px) {
    position: sticky;
  }
`

export const Overlay = styled(motion.div)`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 9;
    background-color: gray;
`