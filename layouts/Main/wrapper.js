import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: [start row-1] 100% [row-2] 1fr [stop end];
  grid-template-columns: 100%;

  main {
    min-height: 95.5vh;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export default Wrapper
