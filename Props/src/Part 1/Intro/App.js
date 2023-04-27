// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
     {/* navbar will be imported at the top (Navbar.jsx file inside components) */}

    {/* explicitly arguments will be passed in this navbar component*/}
    <Navbar title="textutil2" aboutText="about2"/>    

    {/*here Navbar is component and title and aboutText are the props*/}
     <Navbar/>   {/* default arguments will be passed in this navbar component */}
  
     </>
      
  );
}

export default App;
