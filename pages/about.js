import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from '../layouts/Main'
import Title from '../components/Title'
import Content from '../components/Content'
import actions from '../redux/actions/about'
import api from '../api/about'

const About = ({ about }) =>
  <Main title='about' host='shintech.ninja' favicon='/static/images/react.svg' >
    <Title title={about.title} fontSize='24ch' colors={['gold', 'green']} />
    <Content content={about.data} />
  </Main>

About.getInitialProps = async ({ store }) => {
  try {
    let json = await api.fetch()

    store.dispatch(actions.fetch(json))
  } catch (err) {
    console.error(err.message)
  }

  return { custom: 'About!!' }
}

About.propTypes = {
  about: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
