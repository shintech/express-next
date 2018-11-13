import Link from 'next/link'
import PropTypes from 'prop-types'
import Wrapper from './wrapper'

const Title = ({ title }) =>
  <Wrapper>
    <Link prefetch href='/'><a>home</a></Link>
    <a href='javascript:void(0);' className='icon' onClick={() => { }}>
      <i className='fa fa-bars' />
    </a>
  </Wrapper>

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title
