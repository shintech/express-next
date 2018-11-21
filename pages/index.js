import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Title from 'components/Title'
import Clicker from 'components/Clicker'
import actions from 'state/actions/trees'
import mainState from 'state/actions/main'

class Home extends React.Component {
  componentDidMount () {
    this.props.toggleInProp(true)
  }

  render () {
    const { title, trees, main, increment, decrement } = this.props

    return (
      <Main title='index' host='shintech.ninja' favicon='/static/images/nodejs-icon.svg'>
        {(!main.loaded) ? <span />
          : <div className='container'>
            <Title title={title} fontSize='18ch' />
            <Clicker trees={trees} increment={increment} decrement={decrement} />
          </div>
        }
      </Main>
    )
  }
}

Home.getInitialProps = async ({ store }) => {
  store.dispatch(mainState.toggleInProp(false))

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
  toggleInProp: bool => {
    dispatch(mainState.toggleInProp(bool))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
