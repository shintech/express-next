import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Title from 'components/Title'
import Content from 'components/Content'
import api from 'api/about'
import actions from 'state/actions/about'
import main from 'state/actions/main'

class About extends React.Component {
  componentWillMount () {
    const { toggleInProp } = this.props
    toggleInProp(true)
  }

  render () {
    const { about, main } = this.props

    return (
      <Main inProp={main.inProp} title='about' host='shintech.ninja' favicon='/static/images/react.svg' >
        <Title title={about.title} fontSize='24ch' colors={['gold', 'green']} />
        <Content content={about.data} />
      </Main>
    )
  }
}

About.getInitialProps = async ({ store }) => {
  try {
    let json = await api.fetch()

    store.dispatch(main.toggleInProp(false))
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

const mapDispatchToProps = (dispatch) => ({
  toggleInProp: payload => {
    dispatch(main.toggleInProp(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
