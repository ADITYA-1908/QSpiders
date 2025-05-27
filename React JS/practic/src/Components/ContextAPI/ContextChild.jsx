import { useContext } from "react";
import { BonusContext } from "./ContextGrandParent";

const ContextChild = () => {
  const { bonus, setBonus } = useContext(BonusContext);

  return (
    <div>
      <h1>Your dollar: {bonus}</h1>
      <button onClick={() => setBonus(bonus + 2000)}>Increase 2000</button>
    </div>
  );
};

export default ContextChild;
