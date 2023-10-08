import React, { useEffect, useState } from 'react'
import './App.scss'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Nav from "./Layouts/Header/Nav";
import Footer from "./Layouts/Footer/Footer"
import Home from './Pages/Home';
import CupPreloader from './components/Preloaders/CupPreloader';
import Sidebar from './components/SideBar/Sidebar';
import About from './Pages/About/About';
import Newsletter from './Layouts/homeMain/Newsletter';
import Services from './Pages/Services/Services';
import Testimonial from './Layouts/Testimonial/Main';
import Contact from './Layouts/Contact/Main';



function App() {

  const [isLoading, setIsLoading] = useState(true);
  
 const [IsOpen,setIsOpen] = useState(false);

  
 const toggleOpen = () =>{
  console.log(IsOpen);
   setIsOpen(!IsOpen);
 }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  return (     
    <div >
    {isLoading ? (
      <div style={{backgroundColor:"slategray"}}><CupPreloader /></div>
    ) : (<div style={{backgroundColor:"#252323"}}>

      <ToastContainer />
      <Nav toggleOpen={toggleOpen} setIsOpen={setIsOpen}/>
      <Routes>
        
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/services' exact element={<Services/>}/>
        <Route path='/testimonial' exact element={<Testimonial/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/' exact element={<Home/>}/>
      </Routes>
      <Newsletter/>
      <Footer/>
      
    </div>)}
    {IsOpen && (<Sidebar IsOpen={IsOpen} setIsOpen={setIsOpen}/>)}
    </div>
  )
}

export default App;