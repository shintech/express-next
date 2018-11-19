import Head from 'next/head'
import PropTypes from 'prop-types'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Wrapper from './wrapper'
import theme from './theme'
import Transition from 'react-transition-group/Transition'

const duration = 250

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
}

const Main = ({ children, inProp, title = 'default!', host = 'localhost', favicon = '/static/images/favicon.png' }) =>
  <Wrapper theme={theme()}>
    <Head>
      <title>{ title } | {host} </title>
      <link rel='icon' type='image/png' href={favicon} />
    </Head>

    <Nav />

    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <main style={{ ...defaultStyle, ...transitionStyles[state] }}>
          { children }
        </main>
      )}
    </Transition>

    <Footer message={host} />
  </Wrapper>

Main.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  favicon: PropTypes.string
}

export default Main
