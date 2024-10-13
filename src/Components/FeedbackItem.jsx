
import { FaTimes, FaEdit} from 'react-icons/fa';

import React from 'react';

import { useContext } from 'react';

import FeedbackContext from '../Context/FeedbackContext';


// import { useState } from 'react';

import Card from './shared/Card';

import PropTypes from 'prop-types' //imt

const FeedbackItem = ( {item} ) => {



    // Component level state

    // const [rating, setRating] = useState(5);
    // const [text, setText] = useState('This is an example of a feedback');

    // function handleClick(){
    //     setRating( (prev)=> {
    //         return prev+1;
    //     } );
    // }


    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    // reverse={true}
    <Card >
        <div className="num-display absolute w-[50px] h-[50px] text-white  p-2.5 text-center bg-[#ff6a95] rounded-[50%] text-lg -top-2.5 -left-2.5  border border-[#eee] ">
        {item.rating}
        </div>
        <button onClick={ () => deleteFeedback(item.id) }
        className='close absolute top-2.5 right-5 cursor-pointer bg-none border-none'>
            <FaTimes color='purple' />
        </button>
        <button onClick={ ()=> editFeedback(item) }
        className="edit absolute top-2.5 right-10 cursor-pointer bg-none border-none">
          <FaEdit color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
        {/* <button onClick={ handleClick }>Click</button> */}
    </Card>
  )
}

FeedbackItem.propTypes = {
    item : PropTypes.object.isRequired,
}



export default FeedbackItem;