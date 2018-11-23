import React from 'react'
import Link from './ActiveLink'
// import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from './theme'
import SVG from 'static/images/nodejs.svg'

const Nav = () =>
  <Wrapper theme={theme()}>
    <Link prefetch activeClassName='active' route='index'><a>home</a></Link>
    <Link prefetch activeClassName='active' route='about'><a>about</a></Link>
    <Link prefetch activeClassName='active' route='contact'><a>contact</a></Link>
    <SVG className='logo' />
  </Wrapper>

Nav.propTypes = {}

export default Nav
