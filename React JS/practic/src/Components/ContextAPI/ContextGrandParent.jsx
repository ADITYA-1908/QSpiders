import { createContext, useState } from "react";
import ContextChild from "./ContextChild";
import ContextParent from "./ContextParent";

// Contexts
const MoneyContext = createContext();
const BonusContext = createContext();

const ContextGrandParent = () => {
  const [paisa, setPaisa] = useState(6000);
  const [bonus, setBonus] = useState(3000);

  return (
    <MoneyContext.Provider value={{ paisa, setPaisa }}>
      <BonusContext.Provider value={{ bonus, setBonus }}>
        <ContextParent />
        <ContextChild />
      </BonusContext.Provider>
    </MoneyContext.Provider>
  );
};

export default ContextGrandParent;
export { MoneyContext, BonusContext };
