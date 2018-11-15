import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from '../layouts/Main'
import Title from '../components/Title'

const About = ({ title }) =>
  <Main title='about' host='shintech.ninja' favicon='/static/images/react.svg' >
    <Title title={title} />
  </Main>

About.getInitialProps = async () => ({
  title: 'About!!'
})

About.propTypes = {
  title: PropTypes.string.isRequired
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
