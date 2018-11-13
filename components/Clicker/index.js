import Wrapper from './wrapper'

const Clicker = ({ trees, increment = () => {}, decrement = () => {} }) => {
  let value = () => {
    if (trees.value < 0) { return 'negative' }
    if (trees.value === 0) { return 'zero' }
    if (trees.value > 0) { return 'positive' }
  }

  return (
    <Wrapper>
      <p>Number &#10144; <span className={value()}>{trees.value}</span></p>
      <button className='decrement' onClick={() => { decrement(1) }}>Decrement!</button>
      <button className='increment' onClick={() => { increment(1) }}>Increment!</button>
    </Wrapper>
  )
}

export default Clicker
