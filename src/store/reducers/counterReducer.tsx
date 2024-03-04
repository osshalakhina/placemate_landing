// src/reducers/index.js
const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action: { type: string }) => {
  debugger
  switch (action.type) {
    case "INCREMENT":
      return {...state, counter: state.counter + 1};
    case "DECREMENT":
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
};

export default counterReducer;

