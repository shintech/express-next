import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from './theme'

const Footer = ({ message = 'localhost' }) =>
  <Wrapper theme={theme()}>
    <img src='/static/images/react.svg' width='25px' height='25px' />
    <a href='#'>&#169;&nbsp;<span className='footer-message'>{ message }</span></a>
  </Wrapper>

Footer.propTypes = {
  message: PropTypes.string.isRequired
}

export default Footer
