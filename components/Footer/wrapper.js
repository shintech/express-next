import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  min-height: 3vh;
  grid-row: 3;
  border-radius: 1ch;
  background-color: ${props => props.theme.background};
  align-items: center;
  justify-content: center;

  a {
    padding: 1.25ch;
    margin-left: auto;
    margin-top: 0.5ch;
    color: ${props => props.theme.text};
    text-shadow: 0.08ch 0.08ch ${props => props.theme.textShadow};
    text-decoration: none;

    span {
      font-family: 'Rouge Script', cursive;
      font-size: 3ch;
      margin: 0;
    }
  }

  svg {
    margin: 1vh 0 0 2vh;
    height: 5ch;
    width: 5ch;
  }
`

export default Wrapper
