import React from 'react'
import PropTypes from 'prop-types';

import { useContext } from 'react';

import FeedbackContext from '../Context/FeedbackContext';


const FeedbackStats = (  ) => {

  const {feedback} = useContext(FeedbackContext)

    // Calculate ratings avg

    let average = feedback.reduce( (acc, curr) =>{
        return acc + curr.rating
    }, 0 ) / feedback.length ;

    average = average.toFixed(1).replace(/[.,]0$/, '');

    

  return (
    <div className='feedback-stats text-white flex justify-between items-center'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>

    </div>
  )
}


// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats;