import { createStore } from "redux";
import { CounterReducer } from "./reducer.js";

export const Counterstore = createStore(CounterReducer);
