import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import{    //here we are importing the react router dom 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

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
        document.title='TextUtils- Dark Mode'; 
     }
     else{
       setMode('light')
       document.body.style.backgroundColor= 'white'; 
       showAlert("Light mode has been enabled", "success");  
       document.title='TextUtils- Light Mode';
      }
  }

  return (
    <>
    <Router>
    <Navbar title="Textutil" aboutText="About" mode={mode} toggleMode={toggleMode}/>  {/* navbar component */}
       <Alert alert={alert}/>   {/* alert component */}

      <div className="container my-5">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert}/>} />
         </Routes>
      </div>
      </Router> 
      {/* IMPORTANT------> */}
      {/* now replace 'a' and 'href' as 'Link' and 'to' respectively in navbar.jsx component */}
      
      {/*  react partial matches component if we don't write "exact" in eg. <Route exact path="/about" element={<About />} />
       by writing exact, react matches full component */}

     </>
  );
}
export default App;
