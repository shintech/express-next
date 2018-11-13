import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: [start row-1] 100% [row-2] 1fr [stop end];
  grid-template-columns: 100%;

  main {
    min-height: 95vh;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  footer {
    min-height: 4vh;
    grid-row: 2;
    display: flex;
    border-radius: 10px;
    background: magenta;
    align-items: center;
  }

  footer a {
    margin-left: auto;
    color: yellow;
    text-decoration: none;
    padding: 0 2vh 1vh;
  }

  footer a {
    margin-right: 4px;
    margin-top: 1ch;
  }

  footer img {
    padding: 0.3vh 0 0 1vh;
  } 
`

export default Wrapper
