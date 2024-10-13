import React from 'react';

import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';  // for the v6

// import Card from './Components/shared/Card';

// import { v4 as uuidv4 } from 'uuid';
// import { useState } from 'react';

import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
// import FeedbackData from './data/FeedbackData';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import AboutIconLink from './Components/AboutIconLink';
import AboutPage from './pages/AboutPage';

import { FeedbackProvider } from './Context/FeedbackContext';

// import Post from './Components/Post';

function App() {

  // App level State
  // const [feedback, setFeedback]  = useState(FeedbackData);

  // const addFeedback = (newFeedback)=> {
  //   newFeedback.id = uuidv4()
  //   // console.log(newFeedback);
  //   setFeedback( [newFeedback, ...feedback] );
  // }

  // const deleteFeedback = (id) => {
  //   if(window.confirm(`Are you sure want to delete?`)){
  //     setFeedback( feedback.filter( (item) => item.id !== id ) );
  //   }
  // }

  return (
    <>
    <FeedbackProvider>
    <Router>
     <Header  />
     <div className='containerUI'>
        <Routes>

        <Route 
            path='/' 
            element={
              <>
                <FeedbackForm  />
                <FeedbackStats  />
                <FeedbackList   />
              </>
            } 
          />

          
          <Route path='/about' element={<AboutPage />} />
          {/* for purpose of useParams */}
          {/* <Route path='/post/:id/:name' element={ <Post /> } />  */} 
          {/* <Route path='/post/*' element={ <Post /> } />  */}
        </Routes>

        {/* <Card>
          <NavLink to='/' activeClassname='active'>
            Home 
          </NavLink>
          <NavLink to='/about' activeClassname='active'>
            About
          </NavLink>
        </Card> */}

        <AboutIconLink />
     </div>
    </Router>
    </FeedbackProvider>
    </>
  )
}

export default App
