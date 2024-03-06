// src/reducers/index.js
const initialState = {
  todos: [],
};

const todoReducer = (
  state = initialState,
  action: { type: string; todo: string }
) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.todo] };

    // case "REMOVE_TODO": filter todoName

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.todo),
      };
    default:
      return state;
  }
};

export default todoReducer;
