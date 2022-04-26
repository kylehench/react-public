import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  
  return (
    // // Example with inline style
    // <header> 
    //   <h1 style={{color: 'red'}}>{title}</h1>
    // </header>

    // // Example with style from variable
    // <header> 
    //   <h1 style={headingStyle}>{title}</h1>
    // </header>

    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick=
      {onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// // CSS in JS
// const headingStyle = {
//   color: 'red',
//   background: 'black'
// }

export default Header