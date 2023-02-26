import { useState } from "react";
import "./styles.css"
function App() {
  const [result,setResult] = useState("");
  const [soln,setSoln] = useState("");
 
  const handleclick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const handleclickop = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
    setSoln("");
  }

  const backspace = () => {
    setResult(result.slice(0,result.length-1));
  }

  const evaluate = () => {
   
    try {
      setSoln(eval(result).toString());
    } catch (error) {
      setSoln("Error");
    }
  }
  return(
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{result}</div>
        <div className="current-operand">{soln}</div>
      </div>
      <button name="ac"  onClick={clear} className="span-two">AC</button>
      <button name="del" onClick={backspace}>DEL</button>
      <button name="/" onClick={handleclickop}>/</button>
      <button name="1" onClick={handleclick}>1</button>
      <button name="2" onClick={handleclick}>2</button>
      <button name="3" onClick={handleclick}>3</button>
      <button name="*" onClick={handleclickop}>*</button>
      <button name="4" onClick={handleclick}>4</button>
      <button name="5" onClick={handleclick}>5</button>
      <button name="6" onClick={handleclick}>6</button>
      <button name="+" onClick={handleclickop}>+</button>
      <button name="7" onClick={handleclick}>7</button>
      <button name="8" onClick={handleclick}>8</button>
      <button name="9" onClick={handleclick}>9</button>
      <button name="-" onClick={handleclickop}>-</button>
      <button name="." onClick={handleclick}>.</button>
      <button name="0" onClick={handleclick}>0</button>
      <button name="=" onClick={evaluate} className="span-two">=</button>
    </div>
  )
}

export default App;
