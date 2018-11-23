import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from './theme'

const ContactInfo = ({ email = '' }) =>
  <Wrapper theme={theme()}>
    <email>
      <a href={`mailto:${process.env['EMAIL']}`}>{process.env['EMAIL']}</a>
    </email>  
  </Wrapper>

ContactInfo.getInitialProps = () => ({
  email: process.env['EMAIL']
})

ContactInfo.propTypes = {
  content: PropTypes.string.isRequired
}

export default ContactInfo
