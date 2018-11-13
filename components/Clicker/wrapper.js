import styled from 'styled-components'

const Wrapper = styled.div`
  p {
    color: violet;
    font-size: 6ch;
    margin: 0.75ch;
    white-space: nowrap;
    text-align: center;          
  }

  .positive {
    color: palegreen;
  }
  
  .negative {
    color: lightcoral;
  }
  
  .zero {
    color: deepskyblue;
  }

  button {
    border-radius: 2ch;
    height: 10ch;
    width: 23ch;
    font-size: 2.5ch;
    margin: 0.25ch;
    border: 0.1ch solid white;
  }

  button.decrement {
    background-color: pink;
  }

  button.increment {
    background-color: mediumspringgreen;
  }

  button:hover {
    cursor: pointer;
    background-color: gold;
    color: midnightblue;
    border: 0.2ch solid white;
  }

  button:active {
    background-color: teal;
    color: white;
  }
`

export default Wrapper
