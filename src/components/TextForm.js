import React, { useState } from "react";
// import Speech from 'react-speech';
//import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick =() => {
    //console.log("uppercase was clicked");
    let newText=text.toLocaleUpperCase()
    setText(newText)
    props.alertmsg("Converted to Upper case","success")
    
  };
  const handleCpy=()=>
  {
    var text=document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
  }
  const handleloClick=()=>{
 let newText=text.toLocaleLowerCase()
 setText(newText)
 props.alertmsg("Converted to lower case","success")
  };
  const handleOnChange = (event) => {
    // console.log("Trying to change");
    setText(event.target.value)
  };
  const claerText=()=>{
    text="";
    setText(text);
    props.alertmsg("Cleared!!","success")
  }
  let [text, setText] = useState("");
  
  return (
    <>
    <div>
      <div className="mb-3">
        <h1>{props.Heading}</h1>

        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
    </div>
     
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to UpperCase
    </button>

    <button className="btn btn-primary mx-1" onClick={handleloClick}>
        Convert to LowerCase
    </button>
    <button className="btn btn-primary mx-1" value={text} onClick={claerText}>
        Clear Text
    </button>
      
    <button className="btn btn-primary mx-1" onClick={handleCpy}>
        Copy
    </button>
      
    
      
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>Number of words:{
      text.length===0?text.split(' ').length-1:text.split(' ').length} and Character:{text.length} </p>
      <p>Time required by an average user to read the above text per minutes:{0.008*text.split(' ').length} </p>
      <h2>Preview</h2>
      <p>{text}</p>
      <h2>Speed of Writer</h2>
     
     
    </div>
  </>
  );
}

