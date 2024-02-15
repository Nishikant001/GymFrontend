
import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/About';

import Course1 from './components/Course1';
import Nav from './components/Nav';
import Basic from './components/Basic';
import Gal from './components/Gal';
import Nav2 from './components/Nav2';
import Contact from './form/Contact';
import Signin from './components/sign/Signin';
import Login from './components/sign/Login';


function App() {
  return (
    <div className="App">
      
      
      {/* <Nav2/> */}
      <Routes>
      <Route path='/' Component={Nav}/>
      <Route path='/main' Component={Nav2}/>
     
        <Route path='/about' Component={About}/>
        
        
        <Route path='/course' Component={Course1}/>
        <Route path='/basic' Component={Basic}/>
        <Route path='/gallery' Component={Gal}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/signup' Component={Signin}/>
        <Route path='/login' Component={Login}/>
        
      </Routes>
      
      {/* <About/> */}
      
      {/* <Course1/> */}
      
    
      
     
    </div>
  );
}

export default App;
