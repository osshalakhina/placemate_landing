import React, { useState } from "react";
import { useStore } from "@/helpers/hooks/useStore.ts";
import { useDispatch } from "react-redux";
import s from "./index.module.scss";
import classNames from "classnames/bind";
import { RoutesEnum } from "@/App.tsx";
import Button, { ButtonColor, ButtonSize } from "@/components/Button";

const cx = classNames.bind(s);

const Coworkers = () => {
  const [searchValue, setSearchValue] = useState("");
  const [todoValue, setTodoValue] = useState("");
  const { todoReducer } = useStore((state) => state);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch({
      type: "ADD_TODO",
      todo: todoValue,
    });
    setTodoValue("");
  };

  return (
    <div className={cx("container")}>
      <img
        className={cx("main-image")}
        src="/images/header-coworkers.png"
        alt="banner"
      ></img>
      <h1 className={cx("main-text")}>
        What type of working space are you looking for?
      </h1>
      <div className={cx("panel")}>
        <ul className={cx("panel-list")}>
          <li>Open plan seating</li>
          <li>Dedicated desk</li>
          <li>Private office</li>
          <li>Meeting room</li>
          <li>Virtual office</li>
        </ul>
        <div className={cx("panel-line")}></div>
        <div className={cx("search")}>
          <div>
            <label className={cx("panel-name")}>
              Search coworkings by location or name
            </label>
            <input
              className={cx("panel-search", "input-field")}
              type="text"
              value={searchValue}
              onChange={({ target: { value } }) => setSearchValue(value)}
              placeholder="Vilnius, Talent Garden"
            ></input>
          </div>
          <Button color={ButtonColor.BLUE} size={ButtonSize.SMALL}>
            Search
          </Button>
        </div>
      </div>
      <div className={cx("allBtn")}>
        {todoReducer.todos.map((todo, index) => (
          <h4 key={index}>
            {todo}
            <button
              className={cx("addBtn")}
              onClick={() =>
                dispatch({
                  type: "REMOVE_TODO",
                  todo: todo,
                })
              }
            >
              Remove
            </button>
          </h4>
        ))}
        <input
          className={cx("addInput")}
          type="text"
          value={todoValue}
          onChange={({ target: { value } }) => setTodoValue(value)}
          placeholder="Enter todo"
        />
        <button className={cx("addBtn")} onClick={handleAddTodo}>
          Add new todo
        </button>
      </div>
    </div>
  );
};

export default Coworkers;
