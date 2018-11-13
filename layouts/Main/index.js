import Head from 'next/head'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
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

    <footer>
      <img src='/static/images/react.svg' width='25px' height='25px' />
      <a href='#'>&#169;&nbsp;shintech.ninja</a>
    </footer>
  </Wrapper>

Main.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  router: PropTypes.object.isRequired
}

export default withRouter(Main)
