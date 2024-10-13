

import { useState, useContext, useEffect } from 'react';

import Card from './shared/Card';

import Button from './Button';

import RatingSelect from './RatingSelect';

import FeedbackContext from '../Context/FeedbackContext';

const FeedbackForm = (  ) => {

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect( ()=> {

        if(feedbackEdit.edit === true){
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }

    }, [feedbackEdit] )


    function handleTextChange(e) {
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null)
        } else if( text !== '' && text.trim().length <= 10 ){
            setMessage('Text must be atleast 10 characters')
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating,
            }

        if(feedbackEdit.edit){
          updateFeedback(feedbackEdit.item.id, newFeedback)  
        } else {
            addFeedback(newFeedback);
        }   
           

           setText('');
        }

    }



  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2 className='text-center font-semibold text-[22px]'>How would we rate your service with us</h2>
            {/* @todo -> rating select component */}
            <RatingSelect select={ (yourRating) => setRating(yourRating)} />
            <div className="input-group flex border border-[#ccc] py-2 px-2.5 rounded-lg">
                <input type="text"  onChange={handleTextChange} value={text}
                placeholder='Write a review' className='flex-grow-[2] border-none text-base focus:outline-none' />
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className='message pt-2.5 text-center text-violet-500'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm