import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import FeedbackData from '../data/FeedbackData';

import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState(FeedbackData);

    const [feedbackEdit, setFeedbackEdit] = useState( {
        item: {},
        edit: false,
    }  )


    // Add feedback
    const addFeedback = (newFeedback)=> {
        newFeedback.id = uuidv4();
        setFeedback( [newFeedback, ...feedback] );
      }


    // Delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm(`Are you sure want to delete?`)){
          setFeedback( feedback.filter( (item) => item.id !== id ) );
        }
      }

    
    //   Edit feedback

    const editFeedback = (item)=> {
        setFeedbackEdit( {
            item,
            edit: true,
        } )
    }

    // update feedback item
    const updateFeedback = (id, updateItem) => {
        setFeedback( 
            feedback.map( (item) => ( item.id === id ? {...item, ...updateItem} : item ) )
         )
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext;