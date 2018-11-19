import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Title from 'components/Title'
import Clicker from 'components/Clicker'
import api from 'api/trees'
import actions from 'state/actions/trees'
import main from 'state/actions/main'

class Home extends React.Component {
  componentWillMount () {
    const { toggleInProp } = this.props
    toggleInProp(true)
  }

  render () {
    const { title, trees, increment, decrement, main } = this.props

    return (
      <Main inProp={main.inProp} title='index' host='shintech.ninja' favicon='/static/images/nodejs-icon.svg'>
        <Title title={title} fontSize='18ch' />
        <Clicker trees={trees} increment={increment} decrement={decrement} />
      </Main>
    )
  }
}

Home.getInitialProps = async ({ store }) => {
  try {
    let json = await api.fetch()

    store.dispatch(main.toggleInProp(false))
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

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  increment: (value) => {
    dispatch(actions.increment(value))
  },
  decrement: (value) => {
    dispatch(actions.decrement(value))
  },
  toggleInProp: payload => {
    dispatch(main.toggleInProp(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
