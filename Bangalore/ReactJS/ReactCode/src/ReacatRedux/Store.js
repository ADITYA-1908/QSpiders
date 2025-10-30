
import { createStore } from "redux";

//! Initial state
const initialState = {
    init: 0,
};

//! Reducer function passed by the init as a default parameter
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return { init: state.init + 1 };
        case "DECREMENT":
            return { init: state.init - 1 };
        default:
            return state;
    }
}

//combine reducer functiom to combine 2 or more reducer function
//!created a store to pasas it 
const store = createStore(counterReducer);

export default store;