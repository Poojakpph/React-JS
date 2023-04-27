//an app where we can convert a text into uppercase or lowercase without reloading of the page and can get the time approximate of the user to read the words
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
      //  console.log("upper case was clicked" + text);
      //  we want to convert the text into uppercase so..
      let newtext=text.toUpperCase();
       setText(newtext)   
    }
    const handleOnChange=(event)=>{  
        // console.log("On change")
        setText(event.target.value);
     }
   const handleLoClick=()=>{
      // console.log("lower case was clicked" + text);
     //  we want to convert the text into lowercase so..
     let newtext=text.toLowerCase();
      setText(newtext)   
   }

   const handleClearClick=()=>{
   let newtext='';
    setText(newtext)   
    }
   
   const countWords=(str)=>{     
      let words;
        if(text===""){
            words=0;
        }
        else{
          words = str.trim().split(/\s+/).length;
        }
        return words;
     }


   const [text, setText]= useState('');   {/* text is state here and defualt value is Enter text here */}
  // text="new text"; // wrong way to change the state
  // setText("new text");  //correct way to change the state
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="14" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

   </div>

     <div className="container my-3">
      <h3>Your Text Summary</h3>
     <p>{countWords(text)} words and {text.length} characters</p>  
      <p>{0.008 * text.split(" ").length} minutes Time to read</p> 
      <h2>preview</h2>
      <p>{text}</p>
     </div>
   </>
  )
}