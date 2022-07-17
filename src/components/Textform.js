import { useState } from "react";

export default function Textform(props) {
  const handleUpclick = (event) => {
    // event.preventDefault();
    // console.log("Upper case was clicked"+text);
    let newText = text.toUpperCase(text);
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };

  const handleLoclick = (event) => {
    // event.preventDefault();
    // console.log("Lower case was clicked"+text);
    let newText = text.toLowerCase(text);
    setText(newText);
  }

  const handleCopyclick = (event) => {
    let newtext = navigator.clipboard.writeText(text);
  }

  const handleSpeakText = (event) => {
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }

  let array = [];
  const [text, setText] = useState("");
  array = text.split(" ")
  return (
    <>
    <div className="container">
        <h1 className={`text-${props.mode==='light'?"#042743":"light"}`}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control text-black ${props.mode==='dark'?"form-control1":""}`}
            value={text}
            placeholder="Enter the text here"
            onChange={handleOnChange}
            id="myBox"
            rows="8" style={{color:props.mode==='#042743'?"white":"black" , backgroundColor:props.mode==='dark'?"grey":"white"}}
          ></textarea>
        </div>
        <button className={`mx-2 btn btn-primary text-${props.mode==='light'?"#042743":"light"}`} onClick={handleUpclick}>
          Convert to Upper Case
        </button>
        <button className={`mx-2 btn btn-primary text-${props.mode==='light'?"#042743":"light"}`} onClick={handleLoclick}>
          Convert to Lower Case
        </button>
        <button type="button" className={`mx-2 btn btn-primary text-${props.mode==='light'?"#042743":"light"}`} data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Copied" onClick={handleCopyclick}>Copy to clipboard</button>
        <button className={`mx-2 btn btn-primary text-${props.mode==='light'?"#042743":"light"}`} onClick={handleSpeakText}>
          Speak Text
        </button>
    </div>
    <div className={`container my-3 text-${props.mode==='light'?"#042743":"light"}`}>
        <h2>This is your writing summary</h2>

        <p>{array[0]===""?0:array.length} words and {text.length} characters</p>
        {/* <p>{0.008*text.split(" ").length} minutes to read</p> */}
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>
    </div>
    </>
  );
}
