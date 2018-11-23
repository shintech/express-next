import styled from 'styled-components'

const Wrapper = styled.nav`
  grid-row: span 3;
  grid-column: 1;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  background-color: ${props => props.theme.background};

  a {
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.tagBackground};
    text-align: center;
    display: flex;
    align-items: center;

    padding: 2ch;
    text-decoration: none;
    font-size: 2.5ch;

    border-color: black;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-radius: 1ch 0 0 1ch;

    &.active {
      background-color: ${props => props.theme.active};
      color: ${props => props.theme.activeText};

      &:hover{
        background-color: ${props => props.theme.activeHover};
        color: ${props => props.theme.activeHoverText};
        cursor: not-allowed;
      }
    }

    :hover {
      background-color: ${props => props.theme.hover};
      color: ${props => props.theme.hoverText};
    }
  }

  svg.logo {
    height: 9ch;
    width: 9ch;
    margin: auto 2ch 0 auto;
  }
`

export default Wrapper
