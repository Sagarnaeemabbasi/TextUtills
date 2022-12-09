import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import Alert from "./Alert";
function TextForm(props) {
  let [text, setText] = useState("");
  function upperCaseHandler() {
    if (!text) {
      props.showAlert("danger", "Text is Required");
      return;
    }
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success", "Converted to UpperCase");
  }
  function lowerCaseHandler() {
    if (!text) {
      props.showAlert("danger", "Text is Required");
      return;
    }
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("success", "Converted to LowerCase");
  }
  function clearHandler() {
    if (!text) {
      props.showAlert("danger", "Text is Required");
      return;
    }
    let newText = "";
    setText(newText);
    props.showAlert("success", "Text Is Cleared");
  }
  function inverseCaseHandler() {
    if (!text) {
      props.showAlert("danger", "Text is Required");
      return;
    }
    if (text === text.toLowerCase() || text === text.toUpperCase()) {
      let newText = text.toUpperCase();
      setText(newText);
    } else {
      let newText = text.toLowerCase();
      setText(newText);
    }
  }
  function onChangeHandler(e) {
    setText(e.target.value);
  }
  const copyTextHandler = () => {
    // if (!text) {
    //   props.showAlert("danger", "Text is Required");
    //   return;
    // }
    let text = document.getElementById("copyText");
    // text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("success", "Copied To ClipBoard");
  };
  const removeSpacesHandler = () => {
    if (!text) {
      props.showAlert("danger", "Text is Required");

      return;
    }
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success", "Spaces are removed");
  };
  return (
    <div>
      {/* <h1>{props.heading}-{text}</h1>  we can add multiple javaScript {} here */}

      <h1 style={{ color: props.color }}>{props.heading}</h1>
      <textarea
        onChange={onChangeHandler}
        value={text}
        className="form-control"
        placeholder="Enter Text here"
        id="copyText"
        style={{
          height: "200px",
          color: props.color,
          backgroundColor: props.textareabg,
        }}
      ></textarea>
      <button
        disabled={text.length === 0}
        className={`btn btn-${props.btnColor} my-3 mx-1`}
        onClick={upperCaseHandler}
      >
        Convert To UpperCase
      </button>
      <button
        disabled={text.length === 0}
        className={`btn btn-${props.btnColor} my-3 mx-1`}
        onClick={lowerCaseHandler}
      >
        Convert To lowerCase
      </button>
      <button
        disabled={text.length === 0}
        className={`btn btn-${props.btnColor} my-3 mx-1`}
        onClick={clearHandler}
      >
        Clear
      </button>
      <button
        disabled={text.length === 0}
        className={`btn btn-${props.btnColor} my-3 mx-1`}
        onClick={inverseCaseHandler}
      >
        Inverse Case
      </button>
      <button
        disabled={text.length === 0}
        className={`btn btn-${props.btnColor} my-3 mx-1`}
        onClick={copyTextHandler}
      >
        Copy Text
      </button>
      <button
        disabled={text.length === 0}
        className={`btn btn-${props.btnColor} my-3 mx-1`}
        onClick={removeSpacesHandler}
      >
        Remove Extra Spaces
      </button>
      <div>
        <h2 style={{ color: props.color }}>Your Text Summary</h2>
        <p style={{ color: props.color }}>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          Words and {text.length} characters
        </p>
        <h3 style={{ color: props.color }}>
          {text.length === 0 ? "Nothing to preview" : "Preview"}
        </h3>
        <p style={{ color: props.color }}>{text}</p>
      </div>
    </div>
  );
}
export default TextForm;
