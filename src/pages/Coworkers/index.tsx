import React, {useState} from "react";
import {useStore} from "@/helpers/hooks/useStore.ts";
import {useDispatch} from "react-redux";

const Coworkers = () => {
  const [inputValue, setInputValue] = useState('')
  const {todoReducer} = useStore(state => state)
  const dispatch = useDispatch()
  return <div>

    {todoReducer.todos.map(todo => (
      <h4>{todo}
        <button>Remove</button>
        {/*  onClick = ()=>  dispatch({type: "REMOVE_TODO", todoName }) */}
      </h4>
    ))}
    <input type="text"
           value={inputValue}
           onChange={({target: {value}}) => setInputValue(value)}
           placeholder="Enter todo"
    />
    <button onClick={() => dispatch({
      type: "ADD_TODO",
      todo: inputValue,
    })}>Add new todo
    </button>
  </div>;
};

export default Coworkers;
