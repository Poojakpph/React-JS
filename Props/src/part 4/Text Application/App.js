import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  // we basically want to manage all the states through this App.js file
  const [mode, setMode]=useState('light');    //state that tells whether dark or light mode is enabled or not

  const toggleMode=()=>{
    if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor= '#0d283d';   //body color will also gets changed
     }
     else{
       setMode('light')
       document.body.style.backgroundColor= 'white';   //body color will also gets changed
      }
  }

  return (
    <>
    <Navbar title="Textutil" aboutText="About" mode={mode} toggleMode={toggleMode}/>  
    
      <div className="container my-5">
        <TextForm heading="Enter the text to analyze below" mode={mode}/>
       </div>
      
     </>     
  );
}

export default App;
