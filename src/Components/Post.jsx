// For testing purpose of useParams useNavigate




// import React from 'react'
// // import { useParams } from 'react-router-dom'

// // Navigate and Nested Routes
// import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'

// const Post = () => {

//     // const params = useParams(); for just demo of useParams

//     const status = 200;

//     const navigate = useNavigate();

//     const onClick = () => {
//         console.log('Hello');
//         navigate('/about')
//     }

//     if(status === 404){
        
//         return <Navigate to='/notfound' />
//     }

//   return (
//     <div>
//         {/* For just purpose of useParams */}
//         {/* <h1 className='text-3xl'>Post {params.id}</h1>
//         <p>Name {params.name}</p> */}

//         <h1 className='text-xl'>Post</h1>
//         <button onClick={onClick}>Click</button>
//         <Routes>
//             <Route path='/show' element={<h1>Hello World</h1>} />
//         </Routes>
//     </div>
//   )
// }

// export default Post