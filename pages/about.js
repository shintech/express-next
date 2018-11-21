import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Title from 'components/Title'
import Content from 'components/Content'
import api from 'api/about'
import actions from 'state/actions/about'
import mainState from 'state/actions/main'

class About extends React.Component {
  componentDidMount () {
    this.props.toggleInProp(true)
  }

  render () {
    const { about, main } = this.props

    return (
      <Main title='about' host='shintech.ninja' favicon='/static/images/react.svg' >
        {(!main.loaded) ? <span />
          : <div className='container'>
            <Title title={about.title} fontSize='24ch' colors={['gold', 'green']} />
            <Content content={about.data} />
          </div>
        }
      </Main>
    )
  }
}

About.getInitialProps = async ({ store }) => {
  store.dispatch(mainState.toggleInProp(false))

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

const mapStateToProps = (state) => state

const mapDispatchToProps = dispatch => ({
  toggleInProp: bool => {
    dispatch(mainState.toggleInProp(bool))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
