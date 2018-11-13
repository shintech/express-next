import Head from 'next/head'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import Footer from '../../components/Footer'
import Wrapper from './wrapper'

const Main = ({ children, title = 'Hello World!' }) =>
  <Wrapper>
    <Head>
      <title>{ title } | HOME</title>
      <link rel='icon' type='image/png' href='/static/images/favicon.png' />
    </Head>

    <main>
      { children }
    </main>

    <Footer message='shintech.ninja' />
  </Wrapper>

Main.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  router: PropTypes.object.isRequired
}

export default withRouter(Main)
