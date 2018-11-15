import { connect } from 'react-redux'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import actions from '../redux/actions/trees'
import api from '../api/trees'
import Main from '../layouts/Main'
import Clicker from '../components/Clicker'
import Title from '../components/Title'

const { publicRuntimeConfig } = getConfig()
const baseURL = publicRuntimeConfig['BASE_URL']

const Home = ({ title, trees, increment, decrement }) =>
  <Main title='index' host='shintech.ninja' favicon='/static/images/nodejs-icon.svg'>
    <Title title={title} fontSize='18ch' />
    <Clicker trees={trees} increment={increment} decrement={decrement} />
  </Main>

Home.getInitialProps = async ({ store }) => {
  try {
    let json = await api.fetch(baseURL)

    store.dispatch(actions.fetchValue(json.value))
  } catch (err) {
    console.error(err.message)
  }

  return {
    title: 'Hello World!!'
  }
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
  trees: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    increment: (value) => {
      dispatch(actions.increment(value))
    },
    decrement: (value) => {
      dispatch(actions.decrement(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
