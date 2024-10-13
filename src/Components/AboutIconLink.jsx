import React from 'react'
import {FaQuestion} from 'react-icons/fa';

import { Link } from 'react-router-dom';


const AboutIconLink = () => {
  return (
    <div className='about-link flex justify-end'>
        <Link to='/about' className='text-white hover:text-[#ff6a95]'>
           <FaQuestion size={30} />
        </Link>
        {/* <Link to={
            {
                pathname: '/about',
                // search:'?sort=name',
                hash: '#hello'
            }
        }>
           <FaQuestion size={30} />
        </Link> */}
    </div>
  )
}

export default AboutIconLink