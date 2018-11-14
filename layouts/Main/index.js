import Head from 'next/head'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Wrapper from './wrapper'
import theme from './theme'

const Main = ({ children, title = 'default!', host = 'localhost', favicon = '/static/images/favicon.png' }) =>
  <Wrapper theme={theme()}>
    <Head>
      <title>{ title } | {host} </title>
      <link rel='icon' type='image/png' href={favicon} />
    </Head>

    <Nav />

    <main>
      { children }
    </main>

    <Footer message={host} />
  </Wrapper>

Main.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired
}

export default withRouter(Main)
