import "./App.css";
import { useState } from "react";

function App() {
  const [results, setResults] = useState("");

  const clickhandler = (event) => {
    setResults(results.concat(event.target.value));
  };

  const cleardisplay = () => {
    setResults("");
  };
  const calculate = () => {
    let newResults;
    try {
      newResults = eval(results);
    } catch (error) {
      console.error(error);
      newResults = undefined;
    }
  
    if (newResults !== undefined) {
      setResults(newResults.toString());
    } else {
      setResults("");
    }
  };

  return (
    <div className="cal">
      <input type="text" placeholder="0" id="answer" value={results} />
      <input type="button" value="9" className="button" onClick = {clickhandler} />
      <input type="button" value="8" className="button" onClick = {clickhandler} />
      <input type="button" value="7" className="button" onClick = {clickhandler} />
      <input type="button" value="6" className="button" onClick = {clickhandler} />
      <input type="button" value="5" className="button"  onClick = {clickhandler}/>
      <input type="button" value="4" className="button"  onClick = {clickhandler}/>
      <input type="button" value="3" className="button" onClick = {clickhandler} />
      <input type="button" value="2" className="button"  onClick = {clickhandler}/>
      <input type="button" value="1" className="button" onClick = {clickhandler} />

      <input type="button" value="0" className="button"  onClick = {clickhandler}/>
      <input type="button" value="+" className="button"  onClick = {clickhandler}/>
      <input type="button" value="-" className="button"  onClick = {clickhandler}/>
      <input type="button" value="/" className="button" onClick = {clickhandler} />
      <input type="button" value="*" className="button" onClick = {clickhandler} />
      <input type="button" value="%" className="button" onClick = {clickhandler} />
      <input type="button" value="." className="button"  onClick = {clickhandler}/>

      <input type="button" value="Clear" className="button button1" onClick = {cleardisplay} />
      <input type="button" value="=" className="button button1" onClick = {calculate} />
    </div>
  );
}

export default App;
