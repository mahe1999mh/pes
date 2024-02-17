import React from 'react';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import Status from './Status';


const Main = ()=>{
  return(
    <div id="Main">
        <Header/>
        <Home/>
        <Contact/>
        <Status/>
        
    </div>
  )
}

export default Main;