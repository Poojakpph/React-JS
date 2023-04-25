//an app where we can convert a text into uppercase without reloading of the page

import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
       console.log("upper case was clicked" + text);
      //  we want to convert the text into uppercase so..
      let newtext=text.toUpperCase();
       setText(newtext)   
    }
    const handleOnChange=(event)=>{  
        // console.log("On change")
        setText(event.target.value);
     }

   const [text, setText]= useState('Enter text here');   {/* text is state here and defualt value is Enter text here */}
  // text="new text"; // wrong way to change the state
  // setText("new text");  //correct way to change the state
  return (
    <div>
      <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="14" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
   </div>
  )
}
