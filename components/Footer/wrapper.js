import styled from 'styled-components'

const Wrapper = styled.footer`
  min-height: 4vh;
  grid-row: 2;
  display: flex;
  border-radius: 10px;
  background: magenta;
  align-items: center;
  justify-content: center;
  
  a {
    margin-left: auto;
    margin-top: 1ch;
    line-height: 2ch;
    color: green;
    text-shadow: 0.08ch 0.08ch yellowgreen;
    text-decoration: none;
    padding: 0 2vh 1vh;
  }

  img {
    padding: 0.3vh 0 0 1vh;
  }
  
  .footer-message {
    font-family: 'Rouge Script', cursive;
    font-size: 4ch;
    margin: 0;    
  }
`

export default Wrapper
