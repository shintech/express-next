import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from './theme'

const Title = ({ title = 'Hello World!' }) =>
  <Wrapper theme={theme()}>
    <h1>{ title }</h1>
  </Wrapper>

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title
