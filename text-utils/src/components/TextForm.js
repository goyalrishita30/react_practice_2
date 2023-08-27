import React, { useState } from "react";
import PropTypes from "prop-types";


const propTypes = {};
const defaultProps = {};

const TextForm = (props) => {
  const handleUpClick = () => {
    console.log("uppercase clicked" + text);
    let new_text = text.toUpperCase();
    setText(new_text);
    props.showAlert("Converted to upper case", "success");
  };

  const handleLowClick = () => {
    console.log("lower clicked" + text);
    let new_text = text.toLowerCase();
    setText(new_text);
    props.showAlert("Converted to lower case", "success");
  };

  const clearTextClick = () => {
    console.log("clear text clicked" + text);
    setText("");
    props.showAlert("Cleared text", "success");
  };

  const copyToClipboardClick = () => {
    console.log("clear text clicked" + text);
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success")

  };

  const handleOnChange = (event) => {
    console.log("onchange");
    setText(event.target.value)
  };
  const [text, setText] = useState("Enter text here");
  // text = "new text"; // error
  // setText("new state"); // works
  return (
    <>
    <div className="container" style={{color: props.mode==='light'? 'black': 'white'}}>
      <h1>
        {props.heading}
      </h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows={8} value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey': 'white' ,
        color: props.mode==='light'? 'black': 'white'}}/>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lower case</button>
      <button className="btn btn-primary mx-2" onClick={clearTextClick}>Clear text</button>
      <button className="btn btn-primary mx-2" onClick={copyToClipboardClick}>Copy to clipboard</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='light'? 'black': 'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  );
};

TextForm.propTypes = { heading: PropTypes.string};
// isRequired works when no default is given

// if not sent take this
TextForm.defaultProps = { heading: "Enter text", mode: "dark"};

export default TextForm;
