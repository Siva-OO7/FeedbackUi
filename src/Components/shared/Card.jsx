import React from 'react';

import PropTypes from 'prop-types';

const Card = ({children, reverse=false }) => {
//   return (
//     <div className={`bg-white text-[#333] rounded-2xl py-10 px-12 my-5 relative ${reverse && 'reverse'}`}>
//        {children} 
//     </div>
//   )

    return (
    <div className={`bg-white text-[#333] rounded-2xl py-10 px-12 my-5 relative`} style={ {
        backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4)' :'#fff',
        color: reverse ? '#fff' : '#333'
    } }>
       {children} 
    </div>
    )

}


Card.propTypes = {
    children : PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card