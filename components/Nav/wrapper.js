import styled from 'styled-components'

const Wrapper = styled.nav`
  grid-row: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  background-color: ${props => props.theme.background};
  border-radius: 1ch;
  
  a {
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.tagBackground};
    line-height: 4.5ch;
    text-align: center;
    display: flex;
    align-items: center;
    
    padding: 1ch 2ch 1ch 2ch;
    text-decoration: none;
    font-size: 2ch;

    :hover {
      background-color: ${props => props.theme.hover};
      color: ${props => props.theme.hoverText};
      
      svg {
        fill: black;
      }         
    }
    
    &.icon {
     margin-left: auto;
     height: 100%
    }
    
    svg {
      height: 6.5ch;
      width: 6.5ch;
      fill: ${props => props.theme.svg};
    }    
  }
  
  .active {
    background-color: ${props => props.theme.active};
    color: ${props => props.theme.activeHoverText};
  
    &:hover{
      background-color: ${props => props.theme.activeHover};
      color: ${props => props.theme.activeHoverText};
      cursor: not-allowed;
    }  
    
    & svg {
      fill: ${props => props.theme.activeSVG};
    }
  }  
`

export default Wrapper
