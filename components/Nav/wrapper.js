import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  grid-row: 1;
  background-color: ${props => props.theme.background};
  border-radius: 1ch;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  a {
    padding: 1.25ch;
    color: ${props => props.theme.text};
    text-decoration: none;
    font-size: 2ch;

    :hover {
      background-color: ${props => props.theme.hover};
      color: ${props => props.theme.hoverText};
    }
  }

  a.icon {
   margin-left: auto;
  }
`

export default Wrapper
