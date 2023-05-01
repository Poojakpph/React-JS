import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
      let newtext=text.toUpperCase();
       setText(newtext)   
       props.showAlert("Converted to uppercase!", "success");
    }
    const handleOnChange=(event)=>{  
        // console.log("On change")
        setText(event.target.value);
     }
   const handleLoClick=()=>{
     let newtext=text.toLowerCase();
     setText(newtext)  
      props.showAlert("Converted to lowercase!", "success"); 
   }

    const handleClearClick=()=>{
        let newtext='';
        setText(newtext)  
        props.showAlert("Text is cleared", "success");  
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

   const [text, setText]= useState(''); 
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#0d283d'}}>
      <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="14" value={text} onChange={handleOnChange}
              style={{backgroundColor: props.mode==='dark'?'#13466e':'white',  color: props.mode==='dark'?'white':'#0d283d'}}>
              </textarea>  
        </div>
        {/* all the btns will be disabled when user typed nothing or defualt set */}
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>   
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

   </div>

     <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#0d283d'}}>
      <h3>Your Text Summary</h3>
      {/* <p>{text.split(" ").length} words and {text.length} characters</p>   */}
      <p>{countWords(text)} words and {text.length} characters</p>  
      <p>{0.008 * text.split(" ").length} minutes Time to read</p> 
      <h2>preview</h2>
      <p>{ text.length>0? text: "Enter something in the textbox above to preview it "}</p>
     </div>
   </>
  )
}
