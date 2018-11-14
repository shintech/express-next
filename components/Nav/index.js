import Link from 'next/link'
// import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from './theme'

const Nav = () =>
  <Wrapper theme={theme()}>
    <Link prefetch href='javascript:void(0);'><a>home</a></Link>

    <a href='javascript:void(0);' className='icon' onClick={() => { }}>
      <i className='fa fa-bars' />
    </a>
  </Wrapper>

Nav.propTypes = {}

export default Nav
