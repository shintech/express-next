import PropTypes from 'prop-types'
import Wrapper from './wrapper'

const Title = ({ title }) =>
  <Wrapper>
    <h1>{ title }</h1>
  </Wrapper>

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title
