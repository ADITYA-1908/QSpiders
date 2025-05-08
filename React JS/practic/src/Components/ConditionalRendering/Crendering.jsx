import React, { useState } from "react";
import "../../index.css";
const Crendering = () => {
  const [status, setStatus] = useState(false);
  const [theam, setTheam] = useState(false);
  return (
    <div className={`demo ${theam ? "dark" : "light"}`}>
      <button onClick={() => setStatus(!status)}>
        {status ? "close" : "open"}
      </button>
      <button onClick={() => setTheam(!theam)}>
        {theam ? "Light" : "dark"}
      </button>
      {status ? (
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita modi
          sed minima nulla accusantium aliquam vitae? Nam, nobis! Aliquam
          quisquam, dignissimos unde sed error eligendi quos, dicta eveniet
          mollitia accusamus, expedita dolore deleniti? Ullam alias doloribus
          veritatis nulla soluta facere commodi accusantium maiores reiciendis!
          Quibusdam possimus, corrupti quidem aspernatur asperiores fuga? Nam
          ipsum fuga, quas omnis temporibus quod assumenda eos.
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Crendering;
