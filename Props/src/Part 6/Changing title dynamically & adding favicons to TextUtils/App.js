import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode]=useState('light');    
  const [alert, setAlert] = useState(null);   

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    }) 
    setTimeout(() => {
      setAlert(null);
    }, 1500); 
  }

  const toggleMode=()=>{
    if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor= '#0d283d';   
        showAlert("Dark mode has been enabled", "success");
        document.title='TextUtils- Dark Mode';   //title gets changed if it's dark mode
     }
     else{
       setMode('light')
       document.body.style.backgroundColor= 'white'; 
       showAlert("Light mode has been enabled", "success");  
       document.title='TextUtils- Light Mode';     //title gets changed if it's light mode
      }
  }

  return (
    <>
    <Navbar title="Textutil" aboutText="About" mode={mode} toggleMode={toggleMode}/>  {/* navbar component */}
 
       
       <Alert alert={alert}/>   {/* alert component */}

      <div className="container my-5">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>    {/* textform component */}
      </div>
      
     </>
  );
}

export default App;
