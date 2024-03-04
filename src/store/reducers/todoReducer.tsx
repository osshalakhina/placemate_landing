// src/reducers/index.js
const initialState = {
  todos: []
};


const todoReducer = (state = initialState, action: { type: string, todo: string }) => {
  switch (action.type) {
    case "ADD_TODO":
      return {...state, todos: [...state.todos, action.todo]};

    // case "REMOVE_TODO": filter todoName
    default:
      return state;
  }
};

export default todoReducer;

