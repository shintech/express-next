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
    line-height: 4.5ch;
    text-align: center;
    padding: 1ch 2ch 1ch 2ch;
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
