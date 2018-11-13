import PropTypes from 'prop-types'
import Wrapper from './wrapper'

const Clicker = ({ trees, increment = () => {}, decrement = () => {} }) => {
  let value = (num) => {
    if (num < 0) { return 'negative' }
    if (num === 0) { return 'zero' }
    if (num > 0) { return 'positive' }
  }

  return (
    <Wrapper>
      <p>Number &#10144; <span className={value(trees.value)}>{trees.value}</span></p>
      <button className='decrement' onClick={() => { decrement(1) }}>Decrement!</button>
      <button className='increment' onClick={() => { increment(1) }}>Increment!</button>
    </Wrapper>
  )
}

Clicker.propTypes = {
  trees: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default Clicker
