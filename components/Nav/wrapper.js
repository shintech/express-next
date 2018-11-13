import styled from 'styled-components'

const Wrapper = styled.nav`
  grid-row: 1;
  min-height: 4vh;
  background-color: purple;
  border-radius: 0 0 1ch 1ch;
  overflow: hidden;
  margin: 0;
  display: flex;

  a {
    line-height: 4.5ch;
    text-align: center;
    padding-left: 2ch;
    padding-right: 2ch;
    color: #FFF;
    text-decoration: none;
    font-size: 2ch;
    
    :hover {
      background-color: violet;
      color: black
    }
  }

  a.icon {
   margin-left: auto;
   display: block;
  }
`

export default Wrapper
