import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: [start row-1] 6ch [row-2] auto [row-3] 6ch [stop end];
  grid-template-columns: 100%;

  main {
    min-height: ${props => props.theme.height};
    grid-row: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 900px) {
    background-color: midnightblue;
  }
`

export default Wrapper
