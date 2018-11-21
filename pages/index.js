import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Title from 'components/Title'
import Clicker from 'components/Clicker'
import actions from 'state/actions/trees'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = { loaded: false }
  }

  componentDidMount () {
    this.setState({ loaded: true })
  }

  render () {
    const { title, trees, increment, decrement } = this.props

    return (
      <Main title='index' host='shintech.ninja' favicon='/static/images/nodejs-icon.svg'>
        {(!this.state.loaded) ? <span />
          : <div className='container'>
            <Title title={title} fontSize='18ch' />
            <Clicker trees={trees} increment={increment} decrement={decrement} />
          </div>
        }
      </Main>
    )
  }
}

Home.getInitialProps = async ({ store }) => ({
  title: 'Hello World!!'
})

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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
