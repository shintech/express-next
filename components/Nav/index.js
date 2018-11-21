import React from 'react'
import Link from './ActiveLink'
// import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from './theme'
import SVG from 'static/images/nextjs.svg'

const Nav = () =>
  <Wrapper theme={theme()}>
    <Link prefetch activeClassName='active' route='index'><a><SVG /></a></Link>
    <Link prefetch activeClassName='active' route='about'><a>about</a></Link>

    <a href='javascript:void(0);' className='icon' onClick={() => { }}>
      <i className='fa fa-bars' />
    </a>
  </Wrapper>

Nav.propTypes = {}

export default Nav
