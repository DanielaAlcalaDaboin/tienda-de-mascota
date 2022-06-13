import React, { useState } from "react";
import suma from "../img/suma.png";
import menos from "../img/menos.png";
import "../stylesheet/index.css";

function Contador() {
  const [count, setCount] = useState(1);
    return (
        <div className="container-contador">
          <button onClick={() => setCount(count + 1)}>
            <img className="suma-icon" src={suma} alt="Aumenta la cantidad producto" /> 
          </button>
          <p>{count} times</p>
          <button onClick={() => setCount(count - 1)}>
            <img className="resta-icon" src={menos} alt="Resta la cantidad de producto" /> 

          </button>
        </div>
    );
}

export default Contador;