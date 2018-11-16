import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from './theme'
import SVG from 'static/images/nextjs.svg'

const Footer = ({ message = 'localhost' }) =>
  <Wrapper theme={theme()}>
    <SVG />
    <a href='#'>&#169;&nbsp;<span className='footer-message'>{ message }</span></a>
  </Wrapper>

Footer.propTypes = {
  message: PropTypes.string.isRequired
}

export default Footer
