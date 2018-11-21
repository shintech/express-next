import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 1ch;

  p {
    font-family: 'Farsan', cursive;
    font-size: 4ch;
    color: ${props => props.theme.text};
    text-shadow: ${props => props.theme.textShadow};
    margin: 0;
  }
`

export default Wrapper
