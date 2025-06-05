import React from 'react';
import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter as Router, Routes,Route, } from 'react-router-dom';
 import Home from './React_Router_Dom/Home.jsx'
import About from './React_Router_Dom/About.jsx'
import Contact from './React_Router_Dom/Contact.jsx'
import Error from './React_Router_Dom/Error.jsx'
import Navbar from './React_Router_Dom/Navbar.jsx'
// import { Products } from './React_Router_Dom/Products.jsx'
import { Products,All,Men, Women } from './React_Router_Dom/Products.jsx'
import Students from './React_Router_Dom/Students.jsx'
import Stud_Details from './React_Router_Dom/Stud_Details.jsx'
// import Demo from './React_Router_Dom/Demo.jsx'
// import SearchParam from './React_Router_Dom/SearchParam.jsx'
const LazyData = React.lazy(()=>import('./Data.jsx'));



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <Router>
      {/* <Demo/> */}
      <Navbar/>
      {/* <SearchParam/> */}
      <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
                <Route path='/*' element={<Error />}></Route>

         <Route path='/Products' element={<Products/>}>
        <Route index element={<All/>}></Route>
        <Route path='/Products/Men' element={<Men/>}></Route>
        <Route path='/Products/Women' element={<Women/>}></Route>
        </Route>
        <Route path='/Students' element={<Students/>}></Route>
        <Route path='/Stud_Details/:id' element={<Stud_Details/>}></Route> 
         {/* <Route path='Demo' element={<Demo/>}></Route> */}


         {/* <Route path='/searchparam/' element={<SearchParam/>}></Route>*/}

         <Route path='/Data' element={
          <React.Suspense fallback="Loading..."><LazyData/></React.Suspense>
         }></Route>




       
         
        
       





      </Routes>
    </Router>

    


  </StrictMode>,
)
