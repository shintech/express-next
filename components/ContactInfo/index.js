import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from './theme'

const ContactInfo = ({ email = 'example@example.org' }) =>
  <Wrapper theme={theme()}>
    <a href={`mailto:${email}`}>{email}</a>
  </Wrapper>

ContactInfo.propTypes = {
  email: PropTypes.string.isRequired
}

export default ContactInfo
