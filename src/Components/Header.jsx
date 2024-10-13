import React from 'react';

import PropTypes from 'prop-types';



// Destructering
const Header = ( {text='Feedback UI', bgColor='rgba(0, 0, 0, 0.4)', textColor='#ff6a95'} ) => {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }

    return (
      <>
      <header style={headerStyles} className='h-16 w-full flex justify-between items-center  mb-8'>
        <div className='containerUI'>
          <h2 className='text-2xl'>{text}</h2>
        </div>
       </header>
      </>
    )
  }



// Header.propTypes = {
//     text: PropTypes.string,
//     bgColor: PropTypes.string,
//     textColor: PropTypes.string,
// }

// default prop
// Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.

// Header.defaultProps = {
//     text: 'Feedback UI',
//     bgColor: 'rgba(0, 0, 0, 0.4)',
//     textColor: '#ff6a95',
// }

//   By using props to apply these properties

// const Header = ( props ) => {
//   return (
//     <>
//     <header>
//       <div>
//         <h2>{props.text}</h2>
//       </div>
//      </header>
//     </>
//   )
// }

export default Header;