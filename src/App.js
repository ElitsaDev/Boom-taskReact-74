import "./App.css";
import { useState, useMemo } from "react";

const checkInputIfIsNumber = (text) => {
  let onlyDigits = new RegExp(/^[0-9]*$/gm);
  return onlyDigits.test(text);
}

function App() {
  const [text, setText] = useState("");

  const isValidNumber = useMemo(() => checkInputIfIsNumber(text), [text]);

  return (
    <div className="App">
     <div className="control has-icons-right">
     <input
                className="input is-large"
                type="text"
                placeholder="Enter number..."
                value={text}
                onChange={(event) => {
                    setText(event.target.value);
                }}
            />
            <span className="icon is-small is-right">
                <i className={`fas ${isValidNumber ? "fa-check" : "fa-times"}`} />
            </span>
      </div>
    </div>
  );
}

export default App;
