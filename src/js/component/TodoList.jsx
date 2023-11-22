import React, { useState } from "react";

export const TodoList = () => {
  const [inputValue, setInputValue] = useState(""); 
  const [todos, setTodos] = useState([]);

  //Qué pasa cuando aprietas ENTER:
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") { //Si no es un string vacío:
      const updatedTodos = [inputValue, ...todos]; //Pone lo escrito DELANTE de los ToDo's
      setTodos(updatedTodos);//Refresh de ToDo's
      setInputValue("");//Pone el input en un string vacío.
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

        {todos.map((t, index) => ( //Lista de todos. Un .map que devuelve:
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