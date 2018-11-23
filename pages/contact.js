import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Title from 'components/Title'
import ContactInfo from 'components/ContactInfo'

class Home extends React.Component {
  static async getInitialProps ({ store }) {
    return {
      title: 'Contact!!'
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
      <Main title='contact' host='shintech.ninja' favicon='/static/images/nodejs-icon.svg'>
        <Title title={title} fontSize='22ch' colors={['steelblue', 'lightgreen']} />
        <ContactInfo />
      </Main>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({ })
)(Home)
