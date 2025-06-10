import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleOperation = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Invalid Input");
      return;
    }

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        b !== 0 ? setResult(a / b) : setResult("Cannot divide by zero");
        break;
      default:
        setResult("Invalid Operation");
    }
  };

  const reset = () => {
    setResult(null);
    setNum1("");
    setNum2("");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2> Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>*</button>
        <button onClick={() => handleOperation("/")}>/</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        Result: <strong>{result}</strong>
      </div>
    </div>
  );
}

export default Calculator;
