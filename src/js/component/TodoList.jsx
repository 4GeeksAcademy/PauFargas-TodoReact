import React, { useState } from "react";

export const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const updatedTodos = [inputValue, ...todos];
      setTodos(updatedTodos);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <h1>My ToDo's</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={handleKeyPress}
            placeholder="Add to list"
          />
        </li>

        {todos.map((t, index) => (
          <li key={index}>
            {t}{" "}
            <i
              className="fas fa-times"
              onClick={() =>
                setTodos(todos.filter((_, currentIndex) => index !== currentIndex))
              }
            ></i>
          </li>
        ))}
      </ul>
      <div>
        
        <div><h6>{todos.length} Tasks</h6></div>
      </div>
    </div>
  );
};