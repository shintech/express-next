import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Title from 'components/Title'
import Clicker from 'components/Clicker'
import actions from 'state/actions/trees'
import mainState from 'state/actions/main'

class Home extends React.Component {
  static async getInitialProps ({ store }) {
    return {
      title: 'Hello World!!'
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    trees: PropTypes.object.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }

  render () {
    const { title, trees, increment, decrement } = this.props

    return (
      <Main title='index' host='shintech.ninja' favicon='/static/images/nodejs-icon.svg'>
        <Title title={title} fontSize='18ch' />
        <Clicker trees={trees} increment={increment} decrement={decrement} />
      </Main>
    )
  }
}

export default connect(
  state => state,

  dispatch => ({
    increment: (value) => {
      dispatch(actions.increment(value))
    },
    decrement: (value) => {
      dispatch(actions.decrement(value))
    },
    toggleInProp: bool => {
      dispatch(mainState.toggleInProp(bool))
    }
  })
)(Home)
