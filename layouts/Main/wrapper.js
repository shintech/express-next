import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: [start row-1] 1fr [row-2] auto [row-3] 1fr [stop end];
  grid-template-columns: 100%;

  main {
    min-height: ${props => props.theme.height};

    grid-row: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 800px) {
    background-color: midnightblue;
  }
`

export default Wrapper
