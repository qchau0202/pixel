import React, { useState, useEffect } from "react";
import "../App.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 5) {
      setIsDisable(false);
    }
  }, [count]);

  const addTodo = () => {
    if (inputValue.trim() !== "" && todos.length < 5) {
      setTodos([...todos, { text: inputValue, isChecked: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isChecked = !updatedTodos[index].isChecked;
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const removeAllTodos = () => {
    setTodos([]);
    setIsDisable(true);
    setCount(0);
  };

  return (
    <div className="todo-holder">
      <div className="todo-title center">
        <h2>Pixel To-do's</h2>
      </div>
      <div className="input-holder">
        <input
          type="text"
          placeholder="Add a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo} disabled={!isDisable}>
          +
        </button>
      </div>
      <div className="todo-render">
        <ul>
          {todos.map((todo, index) => (
            <div className="todo" key={index}>
              <input
                type="checkbox"
                checked={todo.isChecked}
                onChange={() => toggleTodo(index)}
              />
              <li
                style={{ textDecoration: todo.isChecked ? "line-through" : "none" }}
              >
                {todo.text}
              </li>
              {todo.isChecked && (
                <button onClick={() => removeTodo(index)}>
                  <img src="trash-bin-2-svgrepo-com.svg" alt="Delete" />
                </button>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="del-holder">
        {todos.some((todo) => todo.isChecked) && (
          <button onClick={removeAllTodos} className="delete-all">
            Remove all
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoList;

