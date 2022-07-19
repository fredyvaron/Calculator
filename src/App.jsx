import { useEffect } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import './App.css'
// import 'materialize-css';
// import { Button, Card, Row, Col } from 'materialize-css';
// import M from 'materialize-css';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import { evaluate } from "mathjs";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  const handleClick = (num) => {
    setCount(count + num);
    console.log(count);
  };
  const handleOperation = (operador) => {
    if (operador === "+") {
      setCount(count + operador);
    } else if (operador === "-") {
      setCount(count + operador);
    } else if (operador === "*") {
      setCount(count + operador);
    } else if (operador === "/") {
      setCount(count + operador);
    } else if (operador === "=") {
      if (count) {
        setData(evaluate(count));
        setCount(evaluate(count));
        console.log(evaluate(count));
      }
    }
    console.log(operador);
  };
  const handledelete = () => {
    setCount("");
    setData("");
  };
  useEffect(() => {
    setData(count);
  }, [count]);
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div className="App">

      <div className="container">
      <div className="input-field col s12">
        <select>
          <option value="1">Normal</option>
          <option value="2">Cientifica</option>
          <option value="3">Option 3</option>
        </select>
        <label>Tipo De Calculadora</label>
      </div>
        <div className="row">
          <div className="col s12">
            <input id="result" type="text" disabled value={data} />
          </div>
        </div>
        <div className="row">
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handleOperation("+")}
            >
              +
            </a>
          </div>
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handleOperation("-")}
            >
              -
            </a>
          </div>
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handleOperation("*")}
            >
              *
            </a>
          </div>
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handleOperation("/")}
            >
              /
            </a>
          </div>
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handleOperation("=")}
            >
              =
            </a>
          </div>
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handledelete(e)}
            >
              Ce
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handleClick(1)}
            >
              1
            </a>
          </div>
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handleClick(2)}
            >
              2
            </a>
          </div>
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handleClick(3)}
            >
              3
            </a>
          </div>
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handleClick(4)}
            >
              4
            </a>
          </div>
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handleClick(5)}
            >
              5
            </a>
          </div>
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handleClick(6)}
            >
              6
            </a>
          </div>
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handleClick(7)}
            >
              7
            </a>
          </div>
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handleClick(8)}
            >
              8
            </a>
          </div>
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handleClick(9)}
            >
              9
            </a>
          </div>
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handleClick(0)}
            >
              0
            </a>
          </div>
          <div className="col l2 m2 s3">
            <a
              className="waves-effect waves-light btn-large"
              onClick={(e) => handleClick(".")}
            >
              .
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
