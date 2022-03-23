import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("UpperCaseWasClicked" + text);
        // setText("YOu Have clicked on upperCase--- ")
        let newText= text.toUpperCase();
        setText(newText);
        props.showalert("lower--case","danger");
    } 

    const handleUpLoClick=()=>{
      console.log("UpperCaseWasClicked" + text);
      // setText("YOu Have clicked on upperCase--- ")
      let newText= text.toLowerCase();
      setText(newText);


      props.showalert("upper--case","success");
  }


    const handleOnChange=(event)=>{
        console.log("On-Changed ");
        setText(event.target.value);
        
    }

  const [text, setText] = useState("Enter bidu text here");

//   setText ("typeman");

  return (
    <>
      <div className="mb-3 container"  style={{color:props.mode==='dark'?"white":'black'}}>
        <h1  style={{
          color:props.mode==='dark'?'white':'black'
        }}>what are the basic</h1>
 
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          rows="8"
          style={{
            backgroundColor:props.mode==='light'?'white':'yellow'
          }}
          
        ></textarea>
        <button className="btn btn-primary m-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary m-2 mx-5" onClick={handleUpLoClick}>Convert to Lovercase</button>
      </div>


      <div className="container my-3">
        <h1 style={{color:props.mode==='dark'?'white':'black'}} >Your Text Summary</h1>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{text.split(' ').length} words and {text.length } chracters</p>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{0.008 * text.split('').length} Minuters for coutn Words</p>
        <h3  style={{color:props.mode==='dark'?'white':'black'}}>Preview</h3>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{text}</p>
      </div>
    </>
  );
}
