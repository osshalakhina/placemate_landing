// src/reducers/index.js
const initialState = {
  age: 25
};

const userReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;

