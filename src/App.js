import React, { useState } from "react";
import "./styles.css";

export default function App() {
  //var counter = 0;

  var [counter, newCounter] = useState(0);

  function buttonClickHandler() {
    newCounter(counter + 1);
    //console.log("Button Clicked!",counter);
  }

  console.log("Counter", counter);

  return (
    <div className="App">
      <h1>Click Counter App</h1>
      <button onClick={buttonClickHandler}>Like Me! {counter}</button>
    </div>
  );
}
