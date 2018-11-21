import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Title from 'components/Title'
import Content from 'components/Content'
import api from 'api/about'
import actions from 'state/actions/about'

class About extends React.Component {
  render () {
    const { about } = this.props

    return (
      <Main title='about' host='shintech.ninja' favicon='/static/images/react.svg' >
        <Title title={about.title} fontSize='24ch' colors={['gold', 'green']} />
        <Content content={about.data} />
      </Main>
    )
  }
}

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

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({ })

export default connect(mapStateToProps, mapDispatchToProps)(About)
