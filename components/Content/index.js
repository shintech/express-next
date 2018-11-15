import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from './theme'

const Content = ({ content = '' }) =>
  <Wrapper theme={theme()}>
    <p>{ content }</p>
  </Wrapper>

Content.getInitialProps = () => ({
  content: 'base content'
})

Content.propTypes = {
  content: PropTypes.string.isRequired
}

export default Content
