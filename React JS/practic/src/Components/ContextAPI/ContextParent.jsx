import { useContext } from "react";
import { MoneyContext } from "./ContextGrandParent";

const ContextParent = () => {
  const { paisa, setPaisa } = useContext(MoneyContext);

  return (
    <>
      <div>
        <h1>Your money: {paisa}</h1>
        <button onClick={() => setPaisa(paisa + 4000)}>Increase 4000</button>
      </div>
    </>
  );
};

export default ContextParent;
