// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    {/* navbar will be imported at the top (Navbar.jsx file inside components) */}
    {/* explicitly arguments will be passed in this navbar component*/}
    <Navbar title="Textutil" aboutText="About"/>         {/*here Navbar is component and title and aboutText are the props*/}

      {/* default arguments will be passed in this navbar component */}
      {/* <Navbar/>   */}
      <div className="container my-5">
        <About/>
      </div> 
     </> 
  );
}

export default App;
